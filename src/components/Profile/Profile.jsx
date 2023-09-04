
import user from '../Profile/user.json';
import { Container,Avatar, Status, Description, Name,Label, Tag, Location, Quantity, StatsItem} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = () => {
    return (
 <Container>
        <Description>
        < Avatar
      src={user.avatar}
      alt="User avatar"
      />
     <Name>{user.username}</Name>
     <Tag>{user.tag}</Tag>
     <Location>{user.location}</Location>
        </Description>      
  <Status>
    <StatsItem>
      <Label>Followers</Label>
      <Quantity>{user.stats.followers}</Quantity>
     </StatsItem>
    <StatsItem>
      <Label>Views</Label>
      <Quantity>{user.stats.views}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Likes</Label>
      <Quantity>{user.stats.likes}</Quantity>
     </StatsItem>
   </Status>
        </ Container>
    )
}


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};