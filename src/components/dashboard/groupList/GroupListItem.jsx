import React from 'react';
import { Avatar, List } from "rsuite";
import PropTypes from "prop-types";
import s from "./style.module.css";

function GroupListItem({ userData, id }) {
  const { name, surname, avatar } = userData;
  const userName = `${name} ${surname}`;
  return (
    <List.Item className={s.student} key={id}>
      <Avatar size="sm" circle src={avatar} alt="avatar" />
      <p>
        {userName}
      </p>
    </List.Item>
  );
}

GroupListItem.propTypes = {
  userData: PropTypes.objectOf(PropTypes.string),
  id: PropTypes.string.isRequired,
};
export default GroupListItem;
