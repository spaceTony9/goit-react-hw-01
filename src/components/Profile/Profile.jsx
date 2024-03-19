import css from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ name, tag, image, stats, location }) => {
  return (
    <div className={css.profile}>
      <div>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.nickname}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.profileInfoList}>
        <li className={css.profileListItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.profileListItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.profileListItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  image: PropTypes.string,
  stats: PropTypes.object,
  location: PropTypes.string.isRequired,
};
