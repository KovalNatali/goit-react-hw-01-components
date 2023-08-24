import { FriendListItem } from "./FriendListItem";
import { Friendlist } from "./Friends.styled";
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (< Friendlist>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ Friendlist>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline:PropTypes.bool,
      id: PropTypes.number,
  })
  ).isRequired
}