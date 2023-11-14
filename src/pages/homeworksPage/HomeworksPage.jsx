import React from 'react';
import { Row, Col } from "rsuite";
import { useParams } from "react-router-dom";
import DefaultTemplate from "../../templates/DefaultTemplate";
import Homeworks from "../../components/homeworks/Homeworks";
import GroupList from "../../components/dashboard/groupList/GroupList";

function HomeworksPage() {
  const courseId = useParams().id;
  return (
    <DefaultTemplate>
      <Row gutter={60}>
        <Col xl={18} lg={16}>
          <Homeworks courseId={courseId} />
        </Col>
        <Col xl={6} lg={8} smHidden xsHidden>
          <GroupList courseId={courseId} />
        </Col>
      </Row>
    </DefaultTemplate>
  );
}

export default HomeworksPage;
