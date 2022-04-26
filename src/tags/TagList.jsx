import PropTypes from 'prop-types';
import { React, memo } from 'react';
import Tag from './Tag';
import './TagList.scss';

const TagList = memo(({
  tags, onTagClick, selectedTag,
}) => {
  if (!tags) {
    return 'Loading...';
  }

  return (
    <div className="tags">
      <ul>
        {tags.map((tag) => (
          <li className={`tag ${selectedTag === tag ? 'selected' : ''}`} key={tag}>
            <Tag
              tag={tag}
              onTagClick={onTagClick}
            />
          </li>
        ))}
      </ul>
    </div>
  );
});

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTagClick: PropTypes.func.isRequired,
  selectedTag: PropTypes.string.isRequired,
};

export default TagList;
