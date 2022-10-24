import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './friendList.module.css';



export const FriendList = ({ friends }) => (
   <ul className={css.friend_list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                id={id}
            />
        ))}
    </ul>
);


FriendListItem.protoType = {
    friends: PropTypes.arrayOf({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }),
};