import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../utils/API_CONFIG";

// eslint-disable-next-line import/prefer-default-export
export const apiBase = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ['Articles', 'User'],
  endpoints: () => ({
  }),

});
