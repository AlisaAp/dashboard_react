import React from 'react';
import { Avatar, List } from "rsuite";
import PropTypes from "prop-types";
import s from "./style.module.css";

function GroupListItem({ userData }) {
  const { name, surname, avatar } = userData;
  const userName = `${name} ${surname}`;

  return (
    <List.Item className={s.student}>
      <Avatar size="sm" circle src={avatar} alt="avatar" />
      <p className={s.name}>
        {userName}
      </p>
    </List.Item>
  );
}

GroupListItem.propTypes = {
  userData: PropTypes.objectOf(PropTypes.string),
};
export default GroupListItem;
