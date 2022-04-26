import PropTypes from 'prop-types';
import React from 'react';
import './SearchBox.scss';

function SearchBox({
  onSearchInputChange,
}) {
  return (
    <div className="search-box">
      <input
        type="text"
        name="search"
        id="search"
        className="search-input"
        placeholder="Search..."
        onChange={(event) => onSearchInputChange(event.target.value)}
      />
    </div>
  );
}

SearchBox.propTypes = {
  onSearchInputChange: PropTypes.func.isRequired,
};

export default SearchBox;
