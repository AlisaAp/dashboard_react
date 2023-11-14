import React from 'react';
import { Row, Col } from "rsuite";
import { useParams } from "react-router-dom";
import DefaultTemplate from "../../templates/DefaultTemplate";
import GroupList from "../../components/dashboard/groupList/GroupList";
import SingleLesson from "../../components/lessons/singleLesson/SingleLesson";

function SingleLessonPage() {
  const courseId = useParams().id;
  const { lessonId } = useParams();

  return (
    <DefaultTemplate>
      <Row gutter={60}>
        <Col xl={18} lg={16}>
          <SingleLesson courseId={courseId} lessonId={lessonId} />
        </Col>
        <Col xl={6} lg={8} smHidden xsHidden>
          <GroupList courseId={courseId} />
        </Col>
      </Row>
    </DefaultTemplate>
  );
}

export default SingleLessonPage;
