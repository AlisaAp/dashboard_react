import React from 'react';
import { Divider, List, Panel, Placeholder } from 'rsuite';
import { useSelector } from "react-redux";
import { useGetCourseByIdQuery } from "../../../store/api/coursesApi";
import GroupListItem from "./GroupListItem";
import { useGetUsersQuery } from "../../../store/api/usersApi";
import s from "./style.module.css";

function GroupList() {
  const activeCourse = useSelector((state) => state.dashboard.activeCourse);
  const { data: course, isLoading } = useGetCourseByIdQuery(activeCourse);
  const { data: students, isLoading: isFetching } = useGetUsersQuery();
  if (isLoading || isFetching) {
    return (
      <Placeholder.Paragraph
        rows={10}
        active
      />
    );
  }
  const { group, teachers, title, startDate } = course;
  const groupStudents = students.filter((e) => group.includes(+e.id));
  const groupTeachers = students.filter((e) => teachers.includes(+e.id));
  return (
    <Panel>
      <div className={s.course_title}>
        {title}
        <Divider vertical />
        {startDate}
      </div>
      <div className={s.list_title}>Teachers</div>
      <List hover bordered>
        {teachers ? groupTeachers.map(({ userData, id }) => (
          <GroupListItem userData={userData} id={id} key={id} />
        )) : null}
      </List>
      <hr />
      <p className={s.list_title}>students</p>
      <List hover bordered>
        {group ? groupStudents.map(({ userData, id }) => (
          <GroupListItem key={id} userData={userData} />
        )) : null}
      </List>
    </Panel>

  );
}

export default GroupList;
