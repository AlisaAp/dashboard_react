import { apiBase } from "./index";

const usersApi = apiBase.injectEndpoints({
  endpoints: (build) => ({
	  getUsers: build.query({
		  query: () => `/users`,
	  }),
	  getUserById: build.query({
		  query: (id) => `/users/${id}`,
	  }),
  }),
  overrideExisting: false,
});

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi;
