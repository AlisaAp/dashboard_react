import React from "react";
import { Col, Loader, Row } from "rsuite";
import { useParams } from "react-router-dom";
import DefaultTemplate from "../../templates/DefaultTemplate";
import ArticlesItem from "../../components/articles/ArticlesItem";
import { useGetArticleByIdQuery } from "../../store/api/articlesApi";

function SingleArticlePage() {
  const articleId = useParams().id;
  const { data, isLoading } = useGetArticleByIdQuery(articleId);
  if (isLoading) return <Loader size="lg" />;
  return (
    <DefaultTemplate>
      <Row>
        <Col>
          <ArticlesItem
            article={data}
          />
        </Col>
      </Row>

    </DefaultTemplate>
  );
}

export default SingleArticlePage;
