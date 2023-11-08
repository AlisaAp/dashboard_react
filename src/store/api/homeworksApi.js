import { apiBase } from "./index";

const homeworksApi = apiBase.injectEndpoints({
  endpoints: (build) => ({
    getHomeworksByCourse: build.query({
      query: (courseId) => `/courses/${courseId}/homeworks`,
      providesTags: (result) => (result
        ? [
          ...result.map(({ id }) => ({
            type: 'Homeworks', id,
          })),
          {
            type: 'Homeworks', id: 'LIST',
          },
        ]
        : [{
          type: 'Homeworks', id: 'LIST',
        }]),
    }),
    getUsersCheckedHomeworks: build.query({
      query: ({ userId, courseId }) => `/users/${userId}/courses/${courseId}/homeworks?status=checked`,
      providesTags: (result) => (result
        ? [
          ...result.map(({ id }) => ({
            type: 'Homeworks', id,
          })),
          {
            type: 'Homeworks', id: 'LIST',
          },
        ]
        : [{
          type: 'Homeworks', id: 'LIST',
        }]),
    }),
    getHomeworkById: build.query({
      query: ({ courseId, homeworkId }) => `/courses/${courseId}/homeworks/${homeworkId}`,
      providesTags: () => [{
        type: 'Homeworks', id: "LIST",
      }],

    }),
    getHomeworkResultById: build.query({
      query: ({ userId, homeworkId }) => `/users/${userId}/homeworks/${homeworkId}`,
      providesTags: () => [{
        type: 'Homeworks', id: "LIST",
      }],

    }),
    getHomeworkResultsByCourse: build.query({
      query: ({ userId, courseId }) => `/users/${userId}/homeworks?courseId=${courseId}`,
      providesTags: () => [{
        type: 'Homeworks', id: "LIST",
      }],

    }),
    sendHomeworkById: build.mutation({
      query: ({ userId, homeworkId, ...patch }) => ({
        url: `/users/${userId}/homeworks/${homeworkId}`,
        headers: {
          'content-type': 'application/json',
        },
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: [{
        type: 'Homeworks', id: 'LIST',
      }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetHomeworkByIdQuery,
  useGetHomeworksByCourseQuery,
  useGetHomeworkResultByIdQuery,
  useGetHomeworkResultsByCourseQuery,
  useGetUsersCheckedHomeworksQuery,
  useSendHomeworkByIdMutation,
} = homeworksApi;
