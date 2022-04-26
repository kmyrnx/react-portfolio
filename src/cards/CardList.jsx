import PropTypes from 'prop-types';
import { React, memo } from 'react';
import Card from './Card';
import './CardList.scss';

const CardList = memo(({ cards }) => {
  if (!cards) {
    return 'Loading...';
  }

  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card.key}
          title={card.title}
          image={card.image}
          description={card.description}
          tags={card.tags}
        />
      ))}
    </div>
  );
});

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
};

export default CardList;
