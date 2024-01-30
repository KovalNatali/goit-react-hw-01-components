// import Posts from './Posts/Posts';
// import BookList from './MyBooks/BookList/BookList';
// import MyBooksForm from './MyBooks/MyBooksForm.jsx/MyBooksForm';
// import MyBookss from './MyBookss/MyBookss/MyBookss';
// import MyBooks from './MyBooks/MyBooks';
// import Vote from './Vote/Vote';
// import MainMenu from './MainMenu/MainMenu';
// import ToggleButton from './ToggleButton/ToggleButton';
// import { Profile } from './Profile/Profile';
// import { Statistics } from './Statistics/Statistics';
// import { FriendList } from './Friends/FriendList';
// import { TransactionHistory } from './Transactions/TransactionHistory';
// import MoveList from './MoveList/MoveList';
// import user from '../components/Profile/user.json';
// import data from '../components/Statistics/data.json';
// import friends from '../components/Friends/friends.json';
// import transactions from '../components/Transactions/transactions.json';
// import movelist from '../components/MoveList/movelist.json';
// import menuItems from '../components/MainMenu/menu.json';
import PostsSearch from './PostsSearch/PostsSearch';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      {/* <Profile user={user} />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
      <MoveList title="Best movies 2023" movelist={movelist} /> */}
      {/* <MainMenu menu={menuItems} /> */}
      {/* <ToggleButton text="Click me" /> */}
      {/* <Vote /> */}
      {/* <MyBooks /> */}
      {/* <MyBookss /> */}
      {/* <Posts /> */}
      <PostsSearch />
      <GlobalStyle />
    </div>
  );
};
