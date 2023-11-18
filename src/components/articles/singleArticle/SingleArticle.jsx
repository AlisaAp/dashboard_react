import React from 'react';
import { Panel } from "rsuite";
import PropTypes from 'prop-types';
import s from './style.module.css';

function SingleArticle({ article }) {
  const { title, publicationDate, description, image } = article;
  const date = publicationDate.slice(0, 10);
  return (
    <Panel bordered className={`${s.container} ${s.item}`}>
      <img src={image} alt={article} className={s.image} />
      <div className={s.title}>
        {title}
      </div>
      <hr />
      <div className={s.date}>
        <p>
          Publication date:
        </p>
        {date}
      </div>
      <hr />
      <div className={s.text}>
        {description}
      </div>
    </Panel>
  );
}

SingleArticle.propTypes = {
  article: PropTypes.objectOf(PropTypes.string),
};
export default SingleArticle;
