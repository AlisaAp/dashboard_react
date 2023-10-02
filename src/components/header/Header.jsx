import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Affix } from 'rsuite';
import ExitIcon from '@rsuite/icons/Exit';
import ResizeIcon from '@rsuite/icons/Resize';
import MenuIcon from '@rsuite/icons/Menu';
import { setExpanded } from "../../store/slices/sidebar";
import { logOut } from "../../store/slices/authentication";
import { useGetUserByIdQuery } from "../../store/api/usersApi";

function Header() {
  const dispatch = useDispatch();
  const expanded = useSelector((state) => state.sidebar.expanded);
  const handleToggle = () => {
    dispatch(setExpanded());
  };

  const id = useSelector((state) => state.authentication.currentUser);
  const { data } = useGetUserByIdQuery(id);

  const clickHandler = () => {
    dispatch(logOut());
  };
  return (
    <Affix>
      <Navbar appearance="subtle">
        <Navbar.Brand href="#">
          {expanded ? (
            <img
              alt="logo"
              src="https://lms.junjun.io/wp-content/themes/Junjun-lms/assets/images/logo.svg"
              width={140}
              height={28}
            />
          ) : (
            <img
              alt="logo"
              src="https://lms.junjun.io/wp-content/themes/Junjun-lms/assets/images/logo-mini.svg"
              width={20}
              height={28}
            />
          )}

        </Navbar.Brand>
        <Nav>
          <Nav.Item icon={<MenuIcon />} onClick={handleToggle} />
        </Nav>
        <Nav pullRight>
          <Nav.Item>{data ? data.userName : 'User'}</Nav.Item>
          <Nav.Item icon={<ResizeIcon />} />
          <Nav.Item icon={<ExitIcon />} onClick={clickHandler} />
        </Nav>
      </Navbar>
    </Affix>
  );
}

export default Header;
