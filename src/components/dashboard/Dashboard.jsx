import React from 'react';
import { Col, Row, Placeholder } from "rsuite";
import { useSelector } from "react-redux";
import ActiveCourses from "./courses/ActiveCourses";
import GroupList from "./groupList/GroupList";
import { useGetUserByIdQuery } from "../../store/api/usersApi";
import HomeworksRating from "../charts/HomeworksRating";

function Dashboard() {
  const userId = useSelector((state) => state.authentication.currentUser);
  const { data: userData, isLoading } = useGetUserByIdQuery(userId);

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
            />
          )
            : null}
        </Row>
        <Row gutter={60}>
          <Col md={24} sm={24} xs={24}>
            <HomeworksRating userId={userId} />
          </Col>
        </Row>
      </Col>
      <Col md={6} sm={24} xs={24}>
        {/* <GroupList courseId={activeCourse} /> */}
        <GroupList />
      </Col>
    </Row>
  );
}

export default Dashboard;
