import React from 'react';
import { Button, ButtonGroup, Col, Divider, Panel, Progress } from "rsuite";
import { Link } from "react-router-dom";
import s from "./style.module.css";

function ActiveCourses({ courses, activeCourse, handleClick }) {
  return (
    courses.map(({ title, id, persent, startDate }) => (
      <Col md={12} sm={12} key={id} className={s.container}>
        <Panel
          className={activeCourse === id ? `${s.card} ${s.active}` : s.card}
          onClick={() => handleClick(id)}
        >
          <div className={s.header}>
            <p className={s.title}>{title}</p>
            <Divider vertical />
            <p className={s.date}>
              {startDate}
            </p>

          </div>
          <Progress.Line percent={persent} strokeColor="#F3D408" showInfo={false} className={s.progress} />
          <ButtonGroup>
            <Button
              appearance="subtle"
              as={Link}
              to={`/${title}/${id}/homeworks`}
            >
              Homeworks
            </Button>
            <Button
              appearance="subtle"
              as={Link}
              to={`/${title}/${id}/lessons`}
            >
              Lessons
            </Button>
          </ButtonGroup>

        </Panel>
      </Col>
    ))
  );
}

export default ActiveCourses;
