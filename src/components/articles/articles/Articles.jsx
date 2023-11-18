import React from 'react';
import { Loader, Col } from "rsuite";
import { useParams } from "react-router-dom";
import { useDeleteArticleMutation, useGetArticleByCategoryQuery } from "../../../store/api/articlesApi";
import ArticlesItem from "./ArticlesItem";
import { useGetUserByIdQuery } from "../../../store/api/usersApi";

function Articles() {
  const { data: user, isLoading: is } = useGetUserByIdQuery(1);
  const [deleteArticle] = useDeleteArticleMutation();
  let articleCategory = useParams().category;
  if (articleCategory === 'all') articleCategory = '';
  const { data, isLoading } = useGetArticleByCategoryQuery(articleCategory);

  if (isLoading || is) return <Loader size="lg" />;

  const addToFavorite = (id) => {
    const { favoriteArticles } = user;
    const fav = [...favoriteArticles];
    fav.push(id);
  };

  const removeArticle = (id) => () => deleteArticle(id);

  return (
    data.map((item) => (
      <Col key={item.id} xs={24} sm={24} md={24} lg={12}>
        <ArticlesItem
          article={item}
          removeArticle={removeArticle(item.id)}
          addToFavorite={addToFavorite(item.id)}
        />
      </Col>
    ))
  );
}

export default Articles;
