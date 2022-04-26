import React, { useEffect } from 'react';
import { Profile, ProfileAPI } from '../profile';
import { CardList, CardsAPI } from '../cards';
import SearchBox from '../search';
import { TagList, TagsAPI } from '../tags';
import './App.scss';
import ErrorBoundary from './ErrorBoundary';
import Footer from '../footer';

function App() {
  const [profile, setProfile] = React.useState({});
  useEffect(() => {
    if (Object.keys(profile).length === 0) {
      ProfileAPI().then((d) => {
        setProfile(d);
      });
    }
  }, [profile]);

  const [tags, setTags] = React.useState([]);
  useEffect(() => {
    if (tags.length === 0) {
      TagsAPI().then((d) => {
        setTags(d);
      });
    }
  }, [tags]);

  const [cards, setCards] = React.useState([]);
  useEffect(() => {
    if (cards.length === 0) {
      CardsAPI().then((d) => {
        setCards(d);
      });
    }
  }, [cards]);

  const [filteredCards, setFilteredCards] = React.useState([]);
  useEffect(() => {
    setFilteredCards(cards);
  }, [cards]);

  const [selectedTag, setSelectedTag] = React.useState('');

  const onSearchChange = (value) => {
    if (selectedTag !== '') {
      setFilteredCards(
        cards.filter(
          (card) => card.title
            .toLowerCase()
            .includes(value.toLowerCase()) && card.tags.includes(selectedTag),
        ),
      );
    } else {
      setFilteredCards(
        cards.filter(
          (card) => card.title.toLowerCase().includes(value.toLowerCase()),
        ),
      );
    }
  };

  const onTagClick = (value) => {
    if (selectedTag === '' || selectedTag !== value) {
      setSelectedTag(value);
      setFilteredCards(
        cards.filter(
          (card) => card.tags.includes(value),
        ),
      );
    } else {
      setSelectedTag('');
      setFilteredCards(cards);
    }
  };

  return (
    <>
      <div className="header">
        <div className="container">
          <ErrorBoundary>
            <Profile profile={profile} />
          </ErrorBoundary>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <ErrorBoundary>
            <SearchBox
              onSearchInputChange={onSearchChange}
            />
          </ErrorBoundary>

          <ErrorBoundary>
            <TagList tags={tags} onTagClick={onTagClick} selectedTag={selectedTag} />
          </ErrorBoundary>

          <ErrorBoundary>
            <CardList cards={filteredCards} />
          </ErrorBoundary>
        </div>
      </div>

      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default App;
