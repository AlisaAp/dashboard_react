import React, { useState } from 'react';
import { Col, Row, Placeholder } from "rsuite";
import { useSelector } from "react-redux";
import ActiveCourses from "./courses/ActiveCourses";
// import HwRating from "../charts/HwRating";
import GroupList from "./groupList/GroupList";
import { useGetUserByIdQuery } from "../../store/api/usersApi";
import HomeworksRating from "../charts/HomeworksRating";

function Dashboard() {
  const [activeCourse, setActiveCourse] = useState("1");
  const userId = useSelector((state) => state.authentication.currentUser);
  const { data: userData, isLoading } = useGetUserByIdQuery(userId);

  const handleClick = (id) => {
    setActiveCourse(id);
  };
  if (isLoading) {
    return (
      <Row gutter={30}>
        <Col xs={8}>
          <Placeholder.Graph active height={50} />
          ;
        </Col>
        <Col xs={8}>
          <Placeholder.Graph active height={50} />
          ;
        </Col>
        <Col xs={8}>
          <Placeholder.Graph active height={50} />
          ;
        </Col>
      </Row>
    );
  }
  const { courses } = userData;
  return (
    <Row gutter={60}>
      <Col md={18}>
        <Row gutter={60}>
          {courses ? (
            <ActiveCourses
              courses={courses}
              handleClick={handleClick}
              activeCourse={activeCourse}
            />
          )
            : null}
        </Row>
        <Row gutter={60}>
          <Col md={24}>
            <HomeworksRating userId={userId} courseId={activeCourse} />
          </Col>
        </Row>
      </Col>
      <Col md={6}>
        <GroupList courseId={activeCourse} />
      </Col>
    </Row>
  );
}

export default Dashboard;
