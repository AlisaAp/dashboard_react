import React from 'react';
import { Nav, Panel } from "rsuite";
import { Link } from "react-router-dom";
import ReactIcon from "../icons/categories/ReactIcon";
import JavascriptIcon from "../icons/categories/JavascriptIcon";
import HtmlIcon from "../icons/categories/HtmlIcon";
import AllArticlesIcon from "../icons/categories/AllArticlesIcon";

function Categories() {
  return (
    <Panel bordered shaded className="content-container" header="Категории">
      <Nav vertical>
        <Nav.Item
          icon={(
            <HtmlIcon />
					)}
          as={Link}
          to="/articles/HTML"
        >
          Html
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
          // onClick={clickHandler('Javascript')}
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
          Все статьи
        </Nav.Item>
      </Nav>
    </Panel>
  );
}

export default Categories;
