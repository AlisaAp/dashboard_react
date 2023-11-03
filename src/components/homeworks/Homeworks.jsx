import React from 'react';
import { Col, Panel, Placeholder, Row } from "rsuite";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useGetHomeworksByCourseQuery } from "../../store/api/homeworksApi";
import HomeworkItem from "./HomeworkItem";
import s from "./style.module.css";

function Homeworks({ courseId }) {
  const userId = useSelector((state) => state.authentication.currentUser);
  const { data: homeworks, isLoading } = useGetHomeworksByCourseQuery({
    userId, courseId,
  });

  if (isLoading) {
    return (
      <Row gutter={30}>
        <Col xs={12}>
          <Placeholder.Graph active height={400} />
        </Col>
        <Col xs={12}>
          <Placeholder.Graph active height={400} />
        </Col>
      </Row>
    );
  }
  const newB = [...homeworks];

  return (
    homeworks ? newB.reverse().map((item) => (
      <Panel bordered className={s.homework} key={item.id}>
        <HomeworkItem
          userHomework={item}
          openBtn
        />
      </Panel>
    )) : null
  );
}

Homeworks.propTypes = {
  courseId: PropTypes.string.isRequired,
};
export default Homeworks;
