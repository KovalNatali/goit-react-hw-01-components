import styled from 'styled-components';

export const Friendlist = styled.ul`
padding: 0;
 display:block;
 max-width: 420px;
 width: 100%;
    margin-left: auto;
    margin-right: auto;
`

export const ItemFriend = styled.li`
display: block;
border:1px solid #d3d3d3;
`
export const Status = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => (props.$isOnline ? 'green' :'red' )};
`

export const FriendsListStyledItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: -1px 1px 7px 1px rgba(0, 0, 0, 0.49);
  &:last-child {
    margin-bottom: 0;
  }
`;