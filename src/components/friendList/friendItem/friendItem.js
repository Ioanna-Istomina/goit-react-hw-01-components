import PropTypes from 'prop-types';
import s from './friendItem.module.css';

const FriendItem = ({ isOnline, name, avatar }) => {
  return (
    <>
      <span className={isOnline ? s.statusTrue : s.statusFalse}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" />
      <p className={s.name}>{name}</p>
    </>
  );
};

FriendItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;
