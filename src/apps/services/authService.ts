import { createApi } from "@reduxjs/toolkit/query/react";
import restBaseQueryWithReauth from "@apps/config/baseQueryWithReauth";
import { ResponseProps, UserProps } from "@globalTypes/globalTypes";

export type LoginResposeType = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

export const authServiceApi = createApi({
  reducerPath: "authServiceApi",
  baseQuery: restBaseQueryWithReauth,
  keepUnusedDataFor: 0,
  endpoints: (builder) => ({
    authLogin: builder.mutation({
      query: (loginInput) => ({
        url: "/auth/login",
        method: "POST",
        body: loginInput,
      }),
    }),
    getProfile: builder.query({
      query: () => ({
        url: "/auth/user-profile",
        method: "GET",
      }),
      transformResponse: (res: ResponseProps<UserProps>) => res.data,
    }),
  }),
});

export const { useAuthLoginMutation, useGetProfileQuery } = authServiceApi;
