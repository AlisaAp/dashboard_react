import React from 'react';
import { Nav } from "rsuite";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import JavascriptIcon from "../icons/categories/JavascriptIcon";
import ReactIcon from "../icons/categories/ReactIcon";

function NavMenuItem({ title, id }) {
  return (
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
  );
}
NavMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default NavMenuItem;
