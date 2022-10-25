import { Profile } from 'components/Profile/Profile';
import user from '../data/user.json';
import { Statistics } from 'components/statistics/statistic';
import data from '../data/data.json';
import { FriendList } from 'components/friendList/friendList';
import friends from '../data/friends.json';
import { TransactionHistory } from 'components/transactionHistory/transactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;

    </div>
  );
};