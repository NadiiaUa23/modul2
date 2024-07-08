
import PropTypes from 'prop-types';
import styles from '../FriendListItem/FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
    <li className={styles.item}>
      <div className={styles.itemBox}>
      <img className={styles.avatar} src={avatar} alt={`${name}'s avatar`} width="48" />
      <p className={styles.name}>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>{isOnline ? 'Online' : 'Offline'}</p>
      </div>
    </li>
  );
  
  FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };
  
  export default FriendListItem;