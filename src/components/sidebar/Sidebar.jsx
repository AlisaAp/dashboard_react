import React from 'react';
import './style.css';
import { useSelector, useDispatch } from "react-redux";
import { Sidenav, Nav, Affix } from "rsuite";
import { Link } from "react-router-dom";
import { setActiveKey } from "../../store/slices/sidebar";
import SidebarHeader from "./SidebarHeader";
import ReactIcon from "../icons/categories/ReactIcon";
import JavascriptIcon from "../icons/categories/JavascriptIcon";
import HomeIcon from "../icons/HomeIcon";

function Sidebar() {
  const dispatch = useDispatch();
  const expanded = useSelector((state) => state.sidebar.expanded);
  const activeKey = useSelector((state) => state.sidebar.activeKey);

  const handleSelect = (eventKey) => {
    dispatch(setActiveKey(eventKey));
  };

  return (
    <Affix top={56}>
      <div
        className="sidenav-container"
        style={expanded ? {
				  width: 240,
        } : {
				  width: 70,
        }}
      >

        <Sidenav
          expanded={expanded}
          className="sidebar_custom"
          appearance="subtle"
        >
          {expanded && <SidebarHeader />}
          <Sidenav.Body>
            <Nav activeKey={activeKey} onSelect={handleSelect}>
              <Nav.Item
                eventKey="1"
                as={Link}
                to="/"
                icon={(
                  <HomeIcon />
								)}
              >
                Dashboard
              </Nav.Item>
              <Nav.Menu
                placement="rightStart"
                eventKey="2"
                title="Js course"
                icon={(
                  <JavascriptIcon />
								)}
              >
                <Nav.Item
                  eventKey="2-1"
                  as={Link}
                  to="/js-course/lessons/"
                >
                  Уроки
                </Nav.Item>
                <Nav.Item
                  eventKey="2-2"
                  as={Link}
                  to="/js-course/homeworks/"
                >
                  Домашки
                </Nav.Item>
              </Nav.Menu>
              <Nav.Menu
                placement="rightStart"
                eventKey="3"
                title="React course"
                icon={(
                  <ReactIcon />
								)}
              >
                <Nav.Item
                  eventKey="3-1"
                  as={Link}
                  to="/react-course/lessons/"
                >
                  Уроки
                </Nav.Item>
                <Nav.Item
                  eventKey="3-2"
                  as={Link}
                  to="/react-course/homeworks/"
                >
                  Домашки
                </Nav.Item>
              </Nav.Menu>
              <hr />
              <Nav.Item eventKey="4" as={Link} to="/articles/all">
                Тематические статьи
              </Nav.Item>

              <hr />
            </Nav>
          </Sidenav.Body>
        </Sidenav>

      </div>

    </Affix>

  );
}

export default Sidebar;
