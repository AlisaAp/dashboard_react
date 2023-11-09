import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Affix, Avatar } from 'rsuite';
import { Link } from "react-router-dom";
import CogIcon from '@rsuite/icons/legacy/Cog';
import ExitIcon from '@rsuite/icons/Exit';
import { useGetUserByIdQuery } from "../../store/api/usersApi";
import s from './style.module.css';
import { logOut } from "../../store/slices/authentication";

function Header() {
  const id = useSelector((state) => state.authentication.currentUser);
  const { data, isLoading } = useGetUserByIdQuery(id);
  const dispatch = useDispatch();
  if (isLoading) return null;
  const { userData } = data;
  const userName = `${userData.name} ${userData.surname}`;
  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <Affix>
      <Navbar appearance="subtle" className={s.header}>
        <Nav pullRight>
          <Nav.Menu title={data ? userName : 'User'}>
            <Nav.Item
              as={Link}
              to="/profile"
              icon={<CogIcon />}
            >
              Profile settings
            </Nav.Item>
            <Nav.Item icon={<ExitIcon />} onClick={handleClick}>Sign out</Nav.Item>
          </Nav.Menu>
          <Nav.Item>
            <Avatar circle src={data ? userData.avatar : null} alt="avatar" />
          </Nav.Item>
        </Nav>
      </Navbar>
    </Affix>
  );
}

export default Header;
