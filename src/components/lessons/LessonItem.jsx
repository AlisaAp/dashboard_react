import React from 'react';
import PropTypes from 'prop-types';
import { Button, Divider, Tag } from "rsuite";
import { Link, useParams } from "react-router-dom";
import s from "./style.module.css";

function LessonItem({ lesson, courseId, openBtn }) {
  const { title, date, description, homeworks, lessonId } = lesson;
  const courseTitle = useParams().courses;
  return (
    <>
      <div className={s.header}>
        <div className={s.title}>
          {`${lessonId}. ${title}`}
        </div>
        <Tag className={s.grade}>{homeworks.length}</Tag>
      </div>
      <div className={s.date_section}>
        <p>Date:</p>
        {date}
      </div>
      <Divider />
      {description}
      <Divider />
      {openBtn === "true" ? (
        <Button
          appearance="primary"
          as={Link}
          to={`/${courseTitle}/${courseId}/lessons/${lessonId}`}
        >
          Open
        </Button>
      ) : null}

    </>
  );
}

LessonItem.propTypes = {
  lesson: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    lessonId: PropTypes.string,
    homeworks: PropTypes.arrayOf(PropTypes.number),
  }),
  courseId: PropTypes.string.isRequired,
  openBtn: PropTypes.string.isRequired,
};
export default LessonItem;
