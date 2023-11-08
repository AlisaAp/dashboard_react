import React from 'react';
import { Nav } from "rsuite";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import JavascriptIcon from "../icons/categories/JavascriptIcon";
import ReactIcon from "../icons/categories/ReactIcon";
import { useGetCoursesQuery } from "../../store/api/coursesApi";

function NavMenuItem({ userCourses }) {
  const { data: coursesData, isLoading } = useGetCoursesQuery();
  if (isLoading) return null;
  const usersCourses = coursesData.filter((e) => userCourses.includes(+e.id));
  return (
    usersCourses.map(({ title, id }) => (
      <Nav.Menu
        key={+id}
        placement="rightStart"
        eventKey={`${id}`}
        title={title}
        icon={(
                  title === 'Javascript' ? <JavascriptIcon /> : <ReactIcon />
              )}
      >
        <Nav.Item
          eventKey={`${id}-1`}
          as={Link}
          to={`/${title}/${id}/lessons`}
        >
          lessons
        </Nav.Item>
        <Nav.Item
          eventKey={`${id}-2`}
          as={Link}
          to={`/${title}/${id}/homeworks`}
        >
          homeworks
        </Nav.Item>
      </Nav.Menu>
    ))

  );
}
NavMenuItem.propTypes = {
  userCourses: PropTypes.arrayOf(PropTypes.number),
};
export default NavMenuItem;
