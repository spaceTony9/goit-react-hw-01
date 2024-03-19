import css from './FriendListItem.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import FriendsList from '../FriendsList.jsx';

const FriendListItem = ({ avatar, name, isOnline, key }) => {
  return (
    <div className={css.container} key={key}>
      <img className={css.img} src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p className={clsx(css.status, !isOnline ? css.offline : '')}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;

FriendsList.propTypes = {
  key: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
