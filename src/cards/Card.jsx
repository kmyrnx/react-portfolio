import PropTypes from 'prop-types';
import { React, memo } from 'react';
import './Card.scss';

const Card = memo(({
  image, title, description, tags,
}) => (
  <div className="card">
    <div className="card-image">
      <img src={image} alt={title} />
    </div>
    <div className="card-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <div className="card-tags">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  </div>
));

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
