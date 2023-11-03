import React from 'react';
import { Row } from "rsuite";
import DefaultTemplate from "../templates/DefaultTemplate";
import Lessons from "../components/lessons/Lessons";

function LessonsPage() {
  return (
    <DefaultTemplate>
      <Row gutter={60}>
        <Lessons />
      </Row>
    </DefaultTemplate>
  );
}

export default LessonsPage;
