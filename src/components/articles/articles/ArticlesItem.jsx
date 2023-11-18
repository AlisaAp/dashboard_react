import React from 'react';
import { Button, ButtonGroup, ButtonToolbar, IconButton, Panel, Tag } from "rsuite";
import PropTypes from 'prop-types';
import { Link, useNavigate } from "react-router-dom";
import StarIcon from '@rsuite/icons/legacy/Star';
import { useSelector } from "react-redux";
import s from './style.module.css';

function ArticlesItem({ article, removeArticle }) {
  const { category, title, publicationDate, description, id, image } = article;
  const navigate = useNavigate();
  const openArticle = () => {
    navigate(`/articles/${category}/${id}`);
  };

  const isAdmin = useSelector((state) => state.authentication.isAdmin);

  const date = publicationDate.slice(0, 10);
  const handleDelete = () => {
    removeArticle(id);
  };
  return (
    <Panel bordered className={`${s.item}${s.container}`}>
      <img src={image} alt={article} className={s.image} />
      <div className={s.header}>
        <Tag color="cyan">
          {category}
        </Tag>
        <IconButton
          size="md"
          icon={<StarIcon />}
          color="orange"
        />
      </div>
      <div className={s.title}>
        <button type="button" onClick={openArticle} onKeyDown={openArticle}>
          {title}
        </button>
      </div>
      <hr />
      <div className={s.date}>
        <p>
          Publication date:
        </p>
        {date}
      </div>
      <hr />
      <div className={s.description}>
        {description}
      </div>
      <hr />
      <ButtonToolbar>
        <ButtonGroup justified>
          <Button
            as={Link}
            to={`/articles/${category}/${id}`}
            color="cyan"
            appearance="ghost"
          >
            Open
          </Button>
          {isAdmin ? (
            <Button color="violet" appearance="ghost" onClick={handleDelete}>
              Delete
            </Button>
          ) : null}
        </ButtonGroup>
      </ButtonToolbar>
    </Panel>
  );
}

ArticlesItem.propTypes = {
  article: PropTypes.objectOf(PropTypes.string),
  removeArticle: PropTypes.func.isRequired,
};
export default ArticlesItem;
