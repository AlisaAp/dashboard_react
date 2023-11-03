import React from 'react';
import { FlexboxGrid, Sidenav } from "rsuite";
import PropTypes from "prop-types";
import StudentIcon from "../../icons/StudentIcon";
import s from './style.module.css';

function SidebarHeader({ userName }) {
  return (
    <Sidenav.Header className={s.header}>
      <FlexboxGrid align="middle">
        <FlexboxGrid.Item colspan={4}>
          <StudentIcon />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item className={s.headerTitle}>
          {userName}
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Sidenav.Header>
  );
}
SidebarHeader.propTypes = {
  userName: PropTypes.string,
};
export default SidebarHeader;
