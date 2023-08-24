
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./Friends/FriendList";
import { TransactionHistory } from "./Transactions/TransactionHistory";
import data from '../components/Statistics/data.json';
import friends from '../components/Friends/friends.json';
import transactions from '../components/Transactions/transactions.json';
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  return (
    <div>
     <Profile/>
     <Statistics stats={data} />
     <FriendList friends={friends} />;
     <TransactionHistory items={transactions} />;
     <GlobalStyle/>
    </div>
  );
};
