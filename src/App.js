import React from 'react';
import Profile from './Components/profile/Profile.js';
import Statistic from './Components/statistic/Statistic.js';
import Friends from './Components/friendList/Friends.js';
import TransactionHistori from './Components/transactionHistori/TransactionHistori.js';


import user from './data/user.json';
import statisticalData from './data/statisticalData.json';
import friends from './data/friends.json';
import transaction from './data/transaction.json';


const App = () => {
     return (
          <>
               <Profile user={user}/>
               <Statistic data={statisticalData} title='Upload stats'/>
               <Friends data={friends}/>
               <TransactionHistori data={transaction} />
          </>
     );
};

export default App;
