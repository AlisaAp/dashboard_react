import React from 'react';
import { Col, Row } from "rsuite";
import { useParams } from "react-router-dom";
import DefaultTemplate from "../../templates/DefaultTemplate";
import Lessons from "../../components/lessons/Lessons";
import GroupList from "../../components/dashboard/groupList/GroupList";

function LessonsPage() {
  const courseId = useParams().id;

  return (
    <DefaultTemplate>
      <Row gutter={60}>
        <Col xl={18} lg={16}>
          <Lessons courseId={courseId} />
        </Col>
        <Col xl={6} lg={8} mdHidden>
          <GroupList courseId={courseId} />
        </Col>
      </Row>
    </DefaultTemplate>
  );
}

export default LessonsPage;
