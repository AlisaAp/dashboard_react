import { configureStore } from "@reduxjs/toolkit";
import sidebar from "./slices/sidebar";
import { apiBase } from "./api";
import authentication from "./slices/authentication";
import article from "./slices/article";

const store = configureStore({
  reducer: {
    sidebar,
    authentication,
    article,
    [apiBase.reducerPath]: apiBase.reducer,
  },
  // eslint-disable-next-line max-len
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiBase.middleware),
});

export default store;
