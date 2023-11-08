import React from 'react';
import { Col, Panel, Placeholder, Row } from "rsuite";
import PropTypes from "prop-types";
import s from "./style.module.css";
import { useGetLessonsByCourseQuery } from "../../store/api/lessonsApi";
import LessonItem from "./LessonItem";

function Lessons({ courseId }) {
  const { data: lessons, isLoading } = useGetLessonsByCourseQuery(courseId);

  if (isLoading) {
    return (
      <Row gutter={30}>
        <Col xs={24}>
          <Placeholder.Graph active height={400} />
        </Col>
      </Row>
    );
  }
  const newLessons = [...lessons];
  return (
    lessons ? newLessons.reverse().map((lesson) => (
      <Panel bordered className={s.lesson} key={lesson.lessonId}>
        <LessonItem
          lesson={lesson}
          courseId={courseId}
          openBtn="true"
        />
      </Panel>
    )) : null
  );
}

Lessons.propTypes = {
  courseId: PropTypes.string.isRequired,
};
export default Lessons;
