import React from 'react';
import { Icon } from "@rsuite/icons";
import { PiStudentDuotone } from "react-icons/pi";

function StudentIcon() {
  return (
    <Icon
      as={PiStudentDuotone}
      size="2em"
      style={{
			  color: "orangered",
		  }}
    />
  );
}

export default StudentIcon;
