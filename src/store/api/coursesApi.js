import { apiBase } from "./index";

const coursesApi = apiBase.injectEndpoints({
  endpoints: (build) => ({
    getCoursesByUserId: build.query({
      query: (userId) => `/users/${userId}/courses`,
    }),
    getCourseById: build.query({
      query: ({ userId, courseId }) => `/users/${userId}/courses/${courseId}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetCoursesByUserIdQuery, useGetCourseByIdQuery } = coursesApi;
