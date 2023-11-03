import React from 'react';
import { Icon } from "@rsuite/icons";
import { AiFillHeart } from "react-icons/ai";
import PropTypes from "prop-types";

function HeartIcon(props) {
  const { color } = props;
  return (
    <Icon
      as={AiFillHeart}
      size="2em"
      style={{
			  color: `${color}`,
		  }}
    />
  );
}
HeartIcon.propTypes = {
  color: PropTypes.string,
};
export default HeartIcon;
