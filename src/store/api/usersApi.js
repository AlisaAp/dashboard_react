import { apiBase } from "./index";

const usersApi = apiBase.injectEndpoints({
  endpoints: (build) => ({
	  getUsers: build.query({
		  query: () => `/users`,
	  }),
	  getUserById: build.query({
		  query: (id) => `/users/${id}`,
	  }),
	  updateUserProfile: build.mutation({
		  query: ({ id, ...patch }) => ({
			  url: `/users/${id}`,
			  headers: {
				  'content-type': 'application/json',
			  },
			  method: 'PUT',
			  body: patch,
		  }),
		  invalidatesTags: [{
			  type: 'Users', id: 'LIST',
		  }],
	  }),
  }),
  overrideExisting: false,
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useGetUsersCoursesQuery,
  useUpdateUserProfileMutation,
} = usersApi;
