import React from 'react';
import { Row } from "rsuite";
import Profile from "../components/profile/Profile";
import DefaultTemplate from "../templates/DefaultTemplate";

function ProfilePage() {
  return (

    <DefaultTemplate>
      <Row gutter={60}>
        <Profile />
      </Row>
    </DefaultTemplate>
  );
}

export default ProfilePage;
