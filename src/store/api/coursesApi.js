import { apiBase } from "./index";

const coursesApi = apiBase.injectEndpoints({
  endpoints: (build) => ({
    getCourses: build.query({
      query: () => `/courses`,
    }),
    getCourseById: build.query({
      query: (courseId) => `/courses/${courseId}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetCoursesQuery, useGetCourseByIdQuery } = coursesApi;
