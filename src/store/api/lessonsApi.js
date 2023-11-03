import { apiBase } from "./index";

const lessonsApi = apiBase.injectEndpoints({
  endpoints: (build) => ({
	  getLessonsByCourse: build.query({
		  query: (id) => `/courses/${id}/lessons`,
	  }),
	  getLessonById: build.query({
		  query: (id) => `/lessons/${id}`,
	  }),
  }),
  overrideExisting: false,
});

export const { useGetLessonByIdQuery, useGetLessonsByCourseQuery } = lessonsApi;
