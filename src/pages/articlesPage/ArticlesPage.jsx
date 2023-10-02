import React from "react";
import { Col, Row, Affix } from "rsuite";
import DefaultTemplate from "../../templates/DefaultTemplate";
import Articles from "../../components/articles/Articles";
import Categories from "../../components/articles/Categories";

function ArticlesPage() {
  return (
    <DefaultTemplate>

      <Row gutter={60}>
        <Col xs={16}>
          <Row gutter={60}>
            <Articles />
          </Row>
        </Col>
        <Col xs={8}>
          <Affix top={120}>
            <Categories />
          </Affix>
        </Col>
      </Row>

    </DefaultTemplate>
  );
}

export default ArticlesPage;
