import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Sidenav, Nav, Affix } from "rsuite";
import { Link } from "react-router-dom";
import s from './style.module.css';
import SidebarHeader from "./sidebarHeader/SidebarHeader";
import HomeIcon from "../icons/HomeIcon";
import { useGetUserByIdQuery } from "../../store/api/usersApi";
import NavMenuItem from "./NavMenuItem";

function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState('0');
  const onToggle = () => {
    setExpanded(!expanded);
  };
  const userId = useSelector((state) => state.authentication.currentUser);
  const { data: user, isLoading } = useGetUserByIdQuery(userId);
  if (isLoading) return null;
  const { userData, courses } = user;
  const userName = `${userData.name} ${userData.surname}`;
  return (
    <Affix top={56}>
      <div
        className={s.container}
        style={expanded ? {
          width: 240,
        } : {
          width: 70,
        }}
      >

        <Sidenav
          expanded={expanded}
          className={s.sidebar}
          appearance="subtle"
          // defaultOpenKeys={['1', '2']}
        >
          {expanded && <SidebarHeader userName={userName} />}
          <Sidenav.Body>
            <Nav activeKey={activeKey} onSelect={setActiveKey}>
              <Nav.Item
                className={s.item}
                eventKey="0"
                as={Link}
                to="/"
                icon={(
                  <HomeIcon />
                                )}
              >
                Dashboard
              </Nav.Item>
              {courses ? <NavMenuItem userCourses={courses} />
                : null}
              <hr />
              <Nav.Item className={s.item} eventKey="3" as={Link} to="/articles/all">
                Articles
              </Nav.Item>
              <hr />
            </Nav>
          </Sidenav.Body>
          <Sidenav.Toggle expanded={expanded} onToggle={onToggle} />
        </Sidenav>
      </div>
    </Affix>

  );
}

export default Sidebar;
