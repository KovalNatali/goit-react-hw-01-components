
import user from '../Profile/user.json';
import { Container,Avatar, Status, Description, Name,Label } from './Profile.styled';


export const Profile = () => {
    return (
 <Container>
        <Description>
        < Avatar
      src={user.avatar}
      alt="User avatar"
      />
     <Name>{user.username}</Name>
     <p className="tag">{user.tag}</p>
     <p className="location">{user.location}</p>
        </Description>      
  <Status>
    <li>
      <Label>Followers</Label>
      <span className="quantity">{user.stats.followers}</span>
     </li>
    <li>
      <Label>Views</Label>
      <span className="quantity">{user.stats.views}</span>
    </li>
    <li>
      <Label>Likes</Label>
      <span className="quantity">{user.stats.likes}</span>
     </li>
   </Status>
        </ Container>
    )
}

