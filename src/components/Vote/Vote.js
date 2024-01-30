import { useState, Component } from 'react';
import styles from './vote.module.css';
import VoteActions from './VoteActions';
import VoteResults from './VoteResults';
import Block from './Block/Block';

const voteOptions = ['democrats', 'respublicons'];

const Vote = () => {
  const [votes, setVotes] = useState({ democrats: 0, respublicons: 0 });

  const calcTotal = () => {
    const { democrats, respublicons } = votes;
    const total = democrats + respublicons;
    return total;
  };
  const calcPercentage = keyName => {
    const total = calcTotal();
    if (!total) {
      return 0;
    }
    const value = votes[keyName];
    return Number(((value / total) * 100).toFixed(2));
  };

  const leaveVote = keyName => {
    setVotes(prevState => ({
      ...prevState,
      [keyName]: prevState[keyName] + 1,
    }));
  };

  const total = calcTotal();
  const democratsPercentage = calcPercentage('democrats');
  const respubliconsPercentage = calcPercentage('respublicons');

  return (
    <div className={styles.wrapper}>
      <Block title="Leave you vote">
        <VoteActions options={voteOptions} leaveVote={leaveVote} />
      </Block>
      <Block title="Result">
        <VoteResults
          total={total}
          democratsPercentage={democratsPercentage}
          respubliconsPercentage={respubliconsPercentage}
        />
      </Block>
    </div>
  );
};

// class Vote extends Component {
//   static voteOptions = ['democrats', 'respublicons'];

//   state = {
//     democrats: 0,
//     respublicons: 0,
//   };

//   calcTotal() {
//     const { democrats, respublicons } = this.state;
//     const total = democrats + respublicons;
//     return total;
//   }
//   calcPercentage(keyName) {
//     const total = this.calcTotal();
//     if (!total) {
//       return 0;
//     }
//     const value = this.state[keyName];
//     return Number(((value / total) * 100).toFixed(2));
//   }

//   leaveVote = keyName => {
//     this.setState(prevState => {
//       return {
//         [keyName]: prevState[keyName] + 1,
//       };
//     });
//   };
//   render() {
//     const total = this.calcTotal();
//     const democratsPercentage = this.calcPercentage('democrats');
//     const respubliconsPercentage = this.calcPercentage('respublicons');

//     return (
//       <div className={styles.wrapper}>
//         <Block title="Leave you vote">
//           <VoteActions options={Vote.voteOptions} leaveVote={this.leaveVote} />
//         </Block>
//         <Block title="Result">
//           <VoteResults
//             total={total}
//             democratsPercentage={democratsPercentage}
//             respubliconsPercentage={respubliconsPercentage}
//           />
//         </Block>
//       </div>
//     );
//   }
// }

export default Vote;
