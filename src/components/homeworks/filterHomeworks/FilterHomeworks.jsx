import React from 'react';
import { Nav, Panel } from "rsuite";
import PropTypes from "prop-types";
import s from "./style.module.css";

function FilterHomeworks({ handleClick }) {
  return (
    <Panel bordered shaded className={s.filter}>
      <Nav>
        <Nav.Item
          onClick={() => handleClick("all")}
        >
          all
        </Nav.Item>
        <Nav.Item
          onClick={() => handleClick("checked")}
        >
          checked
        </Nav.Item>
        <Nav.Item
          onClick={() => handleClick("checking")}
        >
          checking
        </Nav.Item>
        <Nav.Item
          onClick={() => handleClick("")}
        >
          not done
        </Nav.Item>
      </Nav>
    </Panel>
  );
}
FilterHomeworks.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default FilterHomeworks;
