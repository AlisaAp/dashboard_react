import React from 'react';
import { Button, Panel, Tag } from "rsuite";
import PropTypes from 'prop-types';
import './style.css';
import { Link } from "react-router-dom";

function ArticlesItem({ article }) {
  const { category, title, publicationDate, description, id } = article;
  const date = publicationDate.slice(0, 10);
  return (
    <Panel bordered className="content-container article-item">
      <Tag color="cyan" className="article-item_category">
        {category}
      </Tag>
      <div className="article-item_title">
        {title}
      </div>

      <hr />
      <div className="article-item_date">
        <p>
          Publication date:
        </p>
        {date}
      </div>
      <hr />
      <div className="article-item_description">
        {description}
      </div>
      <hr />
      <div>
        <Button>6</Button>
        <Button>6</Button>
        <Button
          as={Link}
          to={`/articles/${category}/${id}`}
        >
          Читать
        </Button>
      </div>
    </Panel>
  );
}

ArticlesItem.propTypes = {
  article: PropTypes.objectOf(PropTypes.string),
};
export default ArticlesItem;
