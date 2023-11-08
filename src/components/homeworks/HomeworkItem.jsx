import React from 'react';
import { Button, Divider } from "rsuite";
import PropTypes from 'prop-types';
import { Link, useParams } from "react-router-dom";
import s from "./style.module.css";
import HomeworkStatus from "./homeworkStatus/HomeworkStatus";
import Complexity from "./complexity/Complexity";

function HomeworkItem({ userHomework, openBtn }) {
  const courseTitle = useParams().courses;
  const {
    title,
    finishDate,
    complexity,
    description,
    id,
    courseId,
  } = userHomework;

  return (
    <>
      <div className={s.header}>
        <div className={s.title}>
          {`${id}. ${title}`}
        </div>
        <HomeworkStatus homeworkId={id} />
      </div>
      <div className={s.date_section}>
        <p>Pass before:</p>
        {finishDate}
        <Divider vertical />
        <div className={s.complexity}>
          <Complexity complexity={complexity} />
        </div>
      </div>
      <hr />
      <div>
        {description}
      </div>
      <hr />
      {openBtn ? (
        <Button
          appearance="primary"
          as={Link}
          to={`/${courseTitle}/${courseId}/homeworks/${id}`}
        >
          Open
        </Button>
      ) : null}
    </>
  );
}

HomeworkItem.propTypes = {
  userHomework: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    complexity: PropTypes.number,
    finishDate: PropTypes.string,
    id: PropTypes.string,
    courseId: PropTypes.string,
  }),
  openBtn: PropTypes.bool.isRequired,
};
export default HomeworkItem;
