import React from 'react';
import { FlexboxGrid, Loader, Sidenav } from "rsuite";
import { useSelector } from "react-redux";
import { useGetUserByIdQuery } from "../../store/api/usersApi";
import StudentIcon from "../icons/StudentIcon";

function SidebarHeader() {
  const id = useSelector((state) => state.authentication.currentUser);
  const { data, isLoading } = useGetUserByIdQuery(id);
  if (isLoading) return <Loader size="lg" />;
  return (
    <Sidenav.Header className="sidenav_header">
      <FlexboxGrid align="middle">
        <FlexboxGrid.Item colspan={4}>
          <StudentIcon />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item className="sidenav_header-title">
          {data.userName}
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Sidenav.Header>
  );
}

export default SidebarHeader;
