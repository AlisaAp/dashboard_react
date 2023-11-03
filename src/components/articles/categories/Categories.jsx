import React from 'react';
import { Nav, Panel } from "rsuite";
import { Link } from "react-router-dom";
import ReactIcon from "../../icons/categories/ReactIcon";
import JavascriptIcon from "../../icons/categories/JavascriptIcon";
import HtmlIcon from "../../icons/categories/HtmlIcon";
import AllArticlesIcon from "../../icons/categories/AllArticlesIcon";
import s from './style.module.css';

function Categories() {
  return (
    <Panel bordered shaded className={s.container} header="Categories">
      <Nav vertical>
        <Nav.Item
          icon={(
            <HtmlIcon />
					)}
          as={Link}
          to="/articles/HTML"
        >
          HTML
        </Nav.Item>
        <Nav.Item
          icon={(
            <ReactIcon />
					)}
          as={Link}
          to="/articles/React"
        >
          React
        </Nav.Item>
        <Nav.Item
          icon={(
            <JavascriptIcon />
					)}
          as={Link}
          to="/articles/Javascript"
        >
          Javascript
        </Nav.Item>
        <hr />
        <Nav.Item
          icon={(
            <AllArticlesIcon />
					)}
          as={Link}
          to="/articles/all"
        >
          All articles
        </Nav.Item>
      </Nav>
    </Panel>
  );
}

export default Categories;
