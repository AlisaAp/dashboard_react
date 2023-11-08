import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Sidenav, Nav, Affix } from "rsuite";
import { Link } from "react-router-dom";
import s from './style.module.css';
import { setActiveKey } from "../../store/slices/sidebar";
import SidebarHeader from "./sidebarHeader/SidebarHeader";
import HomeIcon from "../icons/HomeIcon";
import { useGetUserByIdQuery } from "../../store/api/usersApi";
import NavMenuItem from "./NavMenuItem";

function Sidebar() {
  const dispatch = useDispatch();
  const expanded = useSelector((state) => state.sidebar.expanded);
  const activeKey = useSelector((state) => state.sidebar.activeKey);

  const handleSelect = (eventKey) => {
    dispatch(setActiveKey(eventKey));
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
        >
          {expanded && <SidebarHeader userName={userName} />}
          <Sidenav.Body>
            <Nav activeKey={activeKey} onSelect={handleSelect}>
              <Nav.Item
                className={s.item}
                eventKey="1"
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
              <Nav.Item className={s.item} eventKey="4" as={Link} to="/articles/all">
                Articles
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
