import { apiBase } from "./index";

const articlesApi = apiBase.injectEndpoints({
  endpoints: (build) => ({
    getArticles: build.query({
      query: (limit) => `/articles?page=1&limit=${limit}`,
      providesTags: (result) => (result
        ? [
          ...result.map(({ id }) => ({
            type: 'Articles', id,
          })),
          {
            type: 'Articles', id: 'LIST',
          },
        ]
        : [{
          type: 'Articles', id: 'LIST',
        }]),
    }),
    getArticleById: build.query({
      query: (id) => `/articles/${id}`,
      invalidatesTags: (result, error, id) => [{
        type: 'Articles', id,
      }],
    }),
    getArticleByCategory: build.query({
      query: (category) => `articles?category=${category}`,
      invalidatesTags: (result, error, id) => [{
        type: 'Articles', id,
      }],
    }),
    getArticleByTitle: build.query({
      query: (title) => `articles?title=${title}`,
      invalidatesTags: (result, error, id) => [{
        type: 'Articles', id,
      }],
    }),
    createArticle: build.mutation({
      query: (body) => ({
        url: '/articles',
        headers: {
          'content-type': 'application/json',
        },
        method: 'Post',
        body,
      }),
      invalidatesTags: (result, error, id) => [{
        type: 'Articles', id,
      }],
    }),
    deleteArticle: build.mutation({
      query: (id) => ({
        url: `/articles/${id}`,
        headers: {
          'content-type': 'application/json',
        },
        method: 'Delete',
      }),
      invalidatesTags: (result, error, id) => [{
        type: 'Articles', id,
      }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetArticlesQuery,
  useGetArticleByIdQuery,
  useGetArticleByCategoryQuery,
  useGetArticleByTitleQuery,
  useCreateArticleMutation,
  useDeleteArticleMutation,
} = articlesApi;
