import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friends/FriendList';
import { TransactionHistory } from './Transactions/TransactionHistory';
import MoveList from './MoveList/MoveList';
import user from '../components/Profile/user.json';
import data from '../components/Statistics/data.json';
import friends from '../components/Friends/friends.json';
import transactions from '../components/Transactions/transactions.json';
import movelist from '../components/MoveList/movelist.json';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
      <MoveList title="Best movies 2023" movelist={movelist} />
      <GlobalStyle />
    </div>
  );
};
