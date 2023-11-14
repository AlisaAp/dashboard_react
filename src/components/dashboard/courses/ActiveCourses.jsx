import React, { useEffect, useState } from 'react';
import { Carousel, Col, DOMHelper } from "rsuite";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { useGetCoursesQuery } from "../../../store/api/coursesApi";
import CourseItem from "./CourseItem";
import { setActiveCourse } from "../../../store/slices/dashboard";

function ActiveCourses({ courses }) {
  const dispatch = useDispatch();
  const { getWidth, on } = DOMHelper;
  const activeCourse = useSelector((state) => state.dashboard.activeCourse);
  const [windowWidth, setWindowWidth] = useState(getWidth(window));
  const [activeIndex, setActiveIndex] = React.useState(0);
  const { data: coursesData, isLoading } = useGetCoursesQuery();

  const newActiveCourse = courses[0].toString();

  useEffect(() => {
    dispatch(setActiveCourse(newActiveCourse));

    setWindowWidth(getWidth(window));
    const resizeListenner = on(window, 'resize', () => setWindowWidth(getWidth(window)));

    return () => {
      resizeListenner.off();
    };
  }, []);
  if (isLoading) return null;
  const usersCourses = coursesData.filter((e) => courses.includes(+e.id));

  if (windowWidth < 576) {
    return (
      <Carousel
        className={s.carousel}
        activeIndex={activeIndex}
        onSelect={(index) => {
          setActiveIndex(index);
          dispatch(setActiveCourse(usersCourses[index].id));
        }}
      >
        {usersCourses.map((course) => (
          <Col sm={24} key={course.id}>
            <CourseItem
              course={course}
              activeCourse={activeCourse}
              clickListener={false}
            />
          </Col>
        ))}
      </Carousel>
    );
  }

  return (
    usersCourses.map((course) => (
      <Col sm={12} key={course.id} className={s.container}>
        <CourseItem
          course={course}
          activeCourse={activeCourse}
          clickListener
        />
      </Col>
    ))
  );
}

ActiveCourses.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.number),
};
export default ActiveCourses;
