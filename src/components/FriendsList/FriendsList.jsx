import css from './FriendsList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem.jsx';
import React from 'react';
import PropTypes from 'prop-types';

const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
