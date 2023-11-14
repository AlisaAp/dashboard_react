import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Sidenav, Nav, Affix, DOMHelper } from "rsuite";
import { Link } from "react-router-dom";
import s from './style.module.css';
import SidebarHeader from "./sidebarHeader/SidebarHeader";
import HomeIcon from "../icons/HomeIcon";
import { useGetUserByIdQuery } from "../../store/api/usersApi";
import NavMenuItem from "./NavMenuItem";
import { setExpanded, setActiveKey } from "../../store/slices/sidebar";

function Sidebar() {
  const dispatch = useDispatch();
  const { getWidth, on } = DOMHelper;
  const userId = useSelector((state) => state.authentication.currentUser);
  const expanded = useSelector((state) => state.sidebar.expanded);
  const activeKey = useSelector((state) => state.sidebar.activeKey);
  const [windowWidth, setWindowWidth] = useState(getWidth(window));

  useEffect(() => {
    setWindowWidth(getWidth(window));
    const resizeListenner = on(window, 'resize', () => setWindowWidth(getWidth(window)));

    return () => {
      resizeListenner.off();
    };
  }, []);

  const onToggle = () => {
    dispatch(setExpanded());
  };
  const setKey = (key) => {
    dispatch(setActiveKey(key));
  };
  const { data: user, isLoading } = useGetUserByIdQuery(userId);
  if (isLoading) return null;
  const { userData, courses } = user;
  const userName = `${userData.name} ${userData.surname}`;
  return (
    <Affix top={56}>
      <div
        className={s.container}
        style={expanded && windowWidth > 600 ? {
          width: 260,
        } : {
          width: 56,
        }}
      >
        <Sidenav
          expanded={windowWidth > 576
            ? expanded
            : false}
          className={s.sidebar}
          appearance="subtle"
        >
          {expanded && windowWidth > 576 && <SidebarHeader userName={userName} />}
          <Sidenav.Body>
            <Nav activeKey={activeKey} onSelect={setKey}>
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
          {windowWidth > 576 ? <Sidenav.Toggle expanded={expanded} onToggle={onToggle} /> : null}

        </Sidenav>
      </div>
    </Affix>

  );
}

export default Sidebar;
