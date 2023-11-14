import React from 'react';
import { Col, Placeholder, Row } from "rsuite";
import PropTypes from "prop-types";

function PlaceHolder({ height }) {
  return (
    <Row gutter={30}>
      <Col xs={24}>
        <Placeholder.Graph active height={height} />
      </Col>
    </Row>
  );
}
PlaceHolder.propTypes = {
  height: PropTypes.number,
};
export default PlaceHolder;
