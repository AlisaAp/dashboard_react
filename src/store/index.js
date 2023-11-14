import { configureStore } from "@reduxjs/toolkit";
import sidebar from "./slices/sidebar";
import { apiBase } from "./api";
import authentication from "./slices/authentication";
import dashboard from "./slices/dashboard";

const store = configureStore({
  reducer: {
    sidebar,
    authentication,
    dashboard,
    [apiBase.reducerPath]: apiBase.reducer,
  },
  // eslint-disable-next-line max-len
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiBase.middleware),
});

export default store;
