import { authServiceApi } from "@apps/services/authService";
import { AuthProps } from "@globalTypes/globalTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  readAccessToken,
  readRefreshToken,
  saveAccessToken,
  saveRefreshToken,
} from "../../utils/localStorage";

const authSliceReducer = createSlice({
  name: "auth",
  initialState: {
    userProfile: null,
    access_token: readAccessToken() || "",
    refresh_token: readRefreshToken() || "",
  } as AuthProps,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { access_token, refresh_token },
      }: PayloadAction<{ access_token?: string; refresh_token?: string }>,
    ) => {
      if (access_token) {
        state.access_token = access_token;
      }
      if (refresh_token) {
        state.refresh_token = refresh_token;
      }
    },
    logout: (state) => {
      state.userProfile = null;
      state.access_token = null;
      state.refresh_token = null;
    },
  },

  extraReducers: (builder) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    builder.addMatcher(
      authServiceApi.endpoints.authLogin.matchFulfilled,
      (state, { payload }) => {
        saveAccessToken(payload.access_token);
        saveRefreshToken(payload.refresh_token);
        return {
          ...state,
          access_token: payload.access_token,
          refresh_token: payload.refresh_token,
        };
      },
      // eslint-disable-next-line no-sequences
    ),
      builder.addMatcher(
        authServiceApi.endpoints.getProfile.matchFulfilled,
        (state, { payload }) => {
          return { ...state, ...payload };
        },
      );
  },
});
export const { setCredentials, logout } = authSliceReducer.actions;
export default authSliceReducer.reducer;
