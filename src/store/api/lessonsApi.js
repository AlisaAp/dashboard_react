import { apiBase } from "./index";

const lessonsApi = apiBase.injectEndpoints({
  endpoints: (build) => ({
    getLessonsByCourse: build.query({
      query: (courseId) => `/courses/${courseId}/lessons`,
    }),
    getLessonById: build.query({
      query: ({ courseId, lessonId }) => `/courses/${courseId}/lessons/${lessonId}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetLessonByIdQuery, useGetLessonsByCourseQuery } = lessonsApi;
