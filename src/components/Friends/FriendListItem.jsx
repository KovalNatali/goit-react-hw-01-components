import PropTypes from 'prop-types';
import {Status, FriendsListStyledItem} from './Friends.styled';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
    <FriendsListStyledItem>
    <Status $isOnline={isOnline}>{isOnline}</Status>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
   </FriendsListStyledItem>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }