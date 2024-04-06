import './App.css';

import Profile from './Profile/Profile.jsx';
import FriendsList from './FriendsList/FriendsList.jsx';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';

import profileData from '/src/userData.json';
import friendsArray from '/src/friendsArray.json';
import transactions from '/src/TransactionHistory.json';

export default function App() {
  return (
    <>
      <Profile
        name={profileData.username}
        tag={profileData.tag}
        location={profileData.location}
        image={profileData.avatar}
        stats={profileData.stats}
      />
      <FriendsList friends={friendsArray} />
      <TransactionHistory items={transactions} />
    </>
  );
}
