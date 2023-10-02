import { createSlice } from "@reduxjs/toolkit";

const article = createSlice({
  initialState: {
    title: '',
    publicationDate: '',
    views: '',
    isFavorite: '',
    description: "",
    category: '',
  },
  name: "article",
  reducers: {
    setArticleData: (state, { payload }) => {
      state.article.title = payload.title;
      state.article.description = payload.description;
      state.article.category = payload.category;
      state.article.publicationDate = new Date();
    },
    setDefaultArticleData: (state) => {
      state.article = state.article.initialState;
    },
  },
});
export const { setArticleData, setDefaultArticleData } = article.actions;

export default article.reducer;
