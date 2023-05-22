import { configureStore } from "@reduxjs/toolkit";
import { authServiceApi } from "./services/authService";
import { productCategoryServiceApi } from "./services/productCategoryService";
import authSliceReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    [authServiceApi.reducerPath]: authServiceApi.reducer,
    [productCategoryServiceApi.reducerPath]: productCategoryServiceApi.reducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authServiceApi.middleware,
      productCategoryServiceApi.middleware,
    ),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
