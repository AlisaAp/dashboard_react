import React from 'react';
import { Icon } from "@rsuite/icons";
import { BiHome } from "react-icons/bi";

function HomeIcon() {
  return (
    <Icon
      as={BiHome}
      size="2em"
      style={{
			  color: "green",
		  }}
    />
  );
}

export default HomeIcon;
