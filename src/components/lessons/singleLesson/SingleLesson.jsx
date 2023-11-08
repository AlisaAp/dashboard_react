import React from 'react';
import { Col, Panel, Placeholder, Row } from "rsuite";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import s from "./style.module.css";
import LessonItem from "../LessonItem";
import { useGetLessonByIdQuery } from "../../../store/api/lessonsApi";
import LessonsHomeworks from "./lessonsHomeworks/LessonsHomeworks";

function SingleLesson({ courseId, lessonId }) {
  const courseTitle = useParams().courses;
  const navigate = useNavigate();
  const { data: lesson, isLoading } = useGetLessonByIdQuery({
    courseId, lessonId,
  });
  if (isLoading) {
    return (
      <Row gutter={30}>
        <Col xs={24}>
          <Placeholder.Graph active height={800} />
        </Col>
      </Row>
    );
  }

  const { link, homeworks } = lesson;

  const handleClick = (id) => {
    navigate(`/${courseTitle}/${courseId}/homeworks/${id}`);
  };
  return (
    <Panel className={s.lesson}>
      <LessonItem lesson={lesson} courseId={courseId} openBtn="false" />
      {homeworks.length ? (
        <div className={s.homeworks}>
          <p className={s.title}>Homeworks</p>
          {homeworks.map((homeworkId) => (
            <LessonsHomeworks
              homeworkId={homeworkId}
              courseId={courseId}
              handleClick={handleClick}
              key={homeworkId}
            />
          ))}
        </div>
      ) : null}
      <div className={s.video}>
        <iframe
          width="560"
          height="350"
          src={link}
          title="YouTube video player"
          allow="accelerometer;
       autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </Panel>
  );
}

SingleLesson.propTypes = {
  courseId: PropTypes.string,
  lessonId: PropTypes.string,
};
export default SingleLesson;
