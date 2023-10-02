import React from "react";
import { Col, Row } from "rsuite";
import DefaultTemplate from "../templates/DefaultTemplate";
import Social from "../components/mainContent/social/Social";
import HwRating from "../components/mainContent/charts/homeworkRating/HwRating";
import TotalRating from "../components/mainContent/charts/totalRating/TotalRating";

function HomePage() {
  return (
    <DefaultTemplate>

      <Row gutter={60}>
        <Col xs={24} className="al">
          <Social />
        </Col>
        <Col xs={8}>
          <HwRating />
        </Col>
        <Col xs={16}>
          <TotalRating />
        </Col>
        <Col xs={8}>
          <HwRating />
        </Col>
        <Col xs={16}>
          {/* <TotalRating /> */}
        </Col>
      </Row>

    </DefaultTemplate>
  );
}

export default HomePage;
