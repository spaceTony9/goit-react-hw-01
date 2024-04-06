import css from './FriendListItem.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.container}>
      <img className={css.img} src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p className={clsx(css.status, !isOnline ? css.offline : '')}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
