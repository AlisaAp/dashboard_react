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
      providesTags: (result, error, id) => [{
        type: 'Articles', id,
      }],
    }),
    getArticleByCategory: build.query({
      query: (category) => `articles?category=${category}`,
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
    getUsersFavArticles: build.query({
      query: (id) => `users/${id}/favorites/${id}`,
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
      invalidatesTags: [{
        type: 'Articles', id: 'LIST',
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
      invalidatesTags: [{
        type: 'Articles', id: 'LIST',
      }],
    }),
    addArticleToFavorite: build.mutation({
      query: (body) => ({
        url: `users/1/favorites/1`,
        headers: {
          'content-type': 'application/json',
        },
        method: 'PUT',
        body,
      }),
      invalidatesTags: [{
        type: 'Articles', id: 'LIST',
      }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetArticlesQuery,
  useGetArticleByIdQuery,
  useGetArticleByCategoryQuery,
  useGetUsersFavArticlesQuery,
  useAddArticleToFavoriteMutation,
  useCreateArticleMutation,
  useDeleteArticleMutation,
} = articlesApi;
