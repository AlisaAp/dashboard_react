import React from "react";
import { Col, Row, Affix } from "rsuite";
import { useSelector } from "react-redux";
import DefaultTemplate from "../../templates/DefaultTemplate";
import Articles from "../../components/articles/articles/Articles";
import Categories from "../../components/articles/categories/Categories";
import NewArticle from "../../components/articles/newArticle/NewArticle";

function ArticlesPage() {
  const isAdmin = useSelector((state) => state.authentication.isAdmin);
  return (
    <DefaultTemplate>

      <Row gutter={60}>
        {isAdmin ? <NewArticle /> : null}
        <Col xs={18}>
          <Row gutter={60}>
            <Articles />
          </Row>
        </Col>
        <Col xs={6}>
          <Affix top={120}>
            <Categories />
          </Affix>

        </Col>
      </Row>

    </DefaultTemplate>
  );
}

export default ArticlesPage;
