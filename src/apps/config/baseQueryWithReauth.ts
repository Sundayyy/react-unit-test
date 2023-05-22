import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { toast } from "react-toastify";
import { Mutex } from "async-mutex";

import { logout, setCredentials } from "@apps/slices/authSlice";
import { PATH_API } from "@utils/constants";
import { saveAccessToken, saveRefreshToken } from "@utils/localStorage";
import { ErrorProps } from "@globalTypes/globalTypes";
import { RootState } from "../store";

interface AuthProps {
  access_token: null | string;
  refresh_token: null | string;
}

// create a new mutex
const mutex = new Mutex();

const baseQueryNotAuth = fetchBaseQuery({
  baseUrl: PATH_API,
});

const baseQuery = fetchBaseQuery({
  baseUrl: PATH_API,

  prepareHeaders: (headers, { getState }) => {
    const access_token = (getState() as RootState).auth.access_token;
    if (access_token) {
      headers.set("Authorization", `Bearer ${access_token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let result: any = await baseQuery(args, api, extraOptions);
  const { access_token, refresh_token }: AuthProps = (
    api.getState() as RootState
  ).auth;

  if (result.error && result.error.status) {
    switch (result.error.status) {
      case 400:
        toast.error("Bad request", {
          position: toast.POSITION.TOP_RIGHT,
        });
        break;
      case 401:
        if (!mutex.isLocked()) {
          const release = await mutex.acquire();
          try {
            // try to get a new token
            if (access_token && refresh_token) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const refreshResult: any = await baseQueryNotAuth(
                {
                  url: "/auth/refresh-token",
                  method: "POST",
                  body: { token: refresh_token },
                },
                api,
                extraOptions,
              );

              if (refreshResult.data) {
                // reset access_token in localStorage
                saveAccessToken(refreshResult.data?.access_token);
                saveRefreshToken(refreshResult.data?.refresh_token);

                // reset access_token in redux
                await api.dispatch(setCredentials(refreshResult.data));

                // retry the initial queryresult = await baseQuery(args, api, extraOptions)
                result = await baseQuery(args, api, extraOptions);
              } else {
                toast.error(result.error.data.message, {
                  position: toast.POSITION.TOP_RIGHT,
                });
                api.dispatch(logout());
                saveAccessToken("");
                saveRefreshToken("");
              }
            } else {
              toast.error(result.error.data.message, {
                position: toast.POSITION.TOP_RIGHT,
              });
            }
          } finally {
            // release must be called once the mutex should be released again.
            release();
          }
        } else {
          await mutex.waitForUnlock();
          result = await baseQuery(args, api, extraOptions);
        }
        break;
      case 403:
        toast.error("Authorize", {
          position: toast.POSITION.TOP_RIGHT,
        });
        break;
      case 422:
        // eslint-disable-next-line no-case-declarations
        const getError = Object.values(
          (result.error?.data as ErrorProps)?.errors,
        )[0];
        toast.error(getError[0], {
          position: toast.POSITION.TOP_RIGHT,
        });
        break;
      case 500:
        console.log("50x");
        break;
      case 501:
      case 502:
      case 503:
        toast.error("Internal Server Error", {
          position: toast.POSITION.TOP_RIGHT,
        });
        break;
    }
  }
  return result;
};
export default baseQueryWithReauth;
