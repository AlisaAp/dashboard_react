import React from "react";
import { Col, Loader, Row } from "rsuite";
import { useParams } from "react-router-dom";
import DefaultTemplate from "../../templates/DefaultTemplate";
import { useGetArticleByIdQuery } from "../../store/api/articlesApi";
import SingleArticle from "../../components/articles/singleArticle/SingleArticle";

function SingleArticlePage() {
  const articleId = useParams().id;
  const { data, isLoading } = useGetArticleByIdQuery(articleId);
  if (isLoading) return <Loader size="lg" />;
  return (
    <DefaultTemplate>
      <Row>
        <Col>
          <SingleArticle
            article={data}
          />
        </Col>
      </Row>
    </DefaultTemplate>
  );
}

export default SingleArticlePage;
