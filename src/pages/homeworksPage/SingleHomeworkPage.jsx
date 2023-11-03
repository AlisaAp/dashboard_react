import React from 'react';
import { Row, Col } from "rsuite";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import DefaultTemplate from "../../templates/DefaultTemplate";
import GroupList from "../../components/dashboard/groupList/GroupList";
import SingleHomework from "../../components/homeworks/singleHomework/SingleHomework";

function HomeworksPage() {
  const courseId = useParams().id;
  const homeworkId = useParams().hwId;
  console.log(homeworkId);
  const userId = useSelector((state) => state.authentication.currentUser);
  return (
    <DefaultTemplate>
      <Row gutter={60}>
        <Col xl={18} lg={16}>
          <SingleHomework courseId={courseId} userId={userId} homeworkId={homeworkId} />
        </Col>
        <Col xl={6} lg={8} mdHidden>
          <GroupList courseId={courseId} />
        </Col>
      </Row>
    </DefaultTemplate>
  );
}

export default HomeworksPage;
