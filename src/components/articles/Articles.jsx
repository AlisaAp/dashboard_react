import React from 'react';
import { Loader, Col } from "rsuite";
import { useParams } from "react-router-dom";
import { useGetArticleByCategoryQuery } from "../../store/api/articlesApi";
import ArticlesItem from "./ArticlesItem";

function Articles() {
  let articleCategory = useParams().category;
  if (articleCategory === 'all') articleCategory = '';

  const { data, isLoading } = useGetArticleByCategoryQuery(articleCategory);
  if (isLoading) return <Loader size="lg" />;

  return (
    data.map((item) => (
      <Col key={item.id} xs={12}>
        <ArticlesItem
          article={item}
        />
      </Col>
    ))
  );
}

export default Articles;
