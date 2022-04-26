import PropTypes from 'prop-types';
import React from 'react';
import './Profile.scss';

function Profile({ profile }) {
  if (Object.keys(profile).length === 0) {
    return 'Loading...';
  }

  return (
    <div className="profile">
      <div className="profile-content">
        <p className="name">{profile.name}</p>
        <p className="title">{profile.title}</p>
        <ul className="links">
          {profile.links.map((link) => (
            <li key={link.name}>
              <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="profile-image">
        <img src={profile.image} alt={profile.name} />
      </div>
    </div>
  );
}

Profile.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
      name: PropTypes.string,
    })),
  }).isRequired,
};

export default Profile;
