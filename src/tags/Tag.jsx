import PropTypes from 'prop-types';
import React from 'react';
import './Tag.scss';

function Tag({ tag, onTagClick }) {
  return (
    <button type="button" onClick={(event) => onTagClick(event.target.textContent)}>{tag}</button>
  );
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
  onTagClick: PropTypes.func.isRequired,
};

export default Tag;
