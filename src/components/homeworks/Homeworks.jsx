import React, { useState } from 'react';
import { Panel } from "rsuite";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useGetHomeworkResultsByCourseQuery,
  useGetHomeworksByCourseQuery } from "../../store/api/homeworksApi";
import HomeworkItem from "./HomeworkItem";
import s from "./style.module.css";
import FilterHomeworks from "./filterHomeworks/FilterHomeworks";
import PlaceHolder from "../placeHolder/PlaceHolder";

function filterHomeworks(homeworks, homeworkResults, filter) {
  const filteredResults = (filter === 'all') ? homeworkResults : homeworkResults.filter((item) => item.status === filter);
  const checkedId = filteredResults.map((item) => item.homeworkId);
  return homeworks.filter((e) => checkedId.includes(e.id));
}

function Homeworks({ courseId }) {
  const userId = useSelector((state) => state.authentication.currentUser);
  const [filter, setFilter] = useState('');
  const { data: homeworks, isLoading } = useGetHomeworksByCourseQuery(courseId);
  const { data: homeworkResults, isLoading: isFetching } = useGetHomeworkResultsByCourseQuery({
    userId, courseId,
  });
  if (isLoading || isFetching) return <PlaceHolder height={400} />;

  const handleClick = (status) => {
    setFilter(status);
  };
  const usersHomeworks = filterHomeworks(homeworks, homeworkResults, filter);

  return (
    <>
      <FilterHomeworks handleClick={handleClick} />
      {homeworks ? usersHomeworks.reverse().map((item) => (
        <Panel bordered className={s.homework} key={item.id}>
          <HomeworkItem
            userHomework={item}
            openBtn="true"
          />
        </Panel>
      )) : null}
    </>
  );
}

Homeworks.propTypes = {
  courseId: PropTypes.string.isRequired,
};
export default Homeworks;
