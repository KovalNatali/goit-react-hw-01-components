import { useState, Component } from 'react';
import styles from './toggle-button.module.css';

const ToggleButton = ({ text }) => {
  const [active, setActive] = useState(false);

  const handalClick = () => {
    setActive(prevState => !prevState);
  };

  const fuIIClassName = active ? `${styles.btn} ${styles.active}` : styles.btn;
  return (
    <button
      onClick={() => setActive(prevState => !prevState)}
      type="button"
      className={fuIIClassName}
    >
      {text}
    </button>
  );
};

// class ToggleButton extends Component {
//   state = {
//     active: false,
//   };
// static defaultProps = {
//   type: "submit"
// }

//   handalClick = () => {
//     this.setState(prevState => {
//       return {
//         active: !prevState.active,
//       };
//     });
//   };

//   render() {
//     const { text,type } = this.props;
//     const { active } = this.state;
//     const fuIIClassName = active
//       ? `${styles.btn} ${styles.active}`
//       : styles.btn;
//     return (
//       <button
//         onClick={this.handalClick}
//        type={type}
//         className={fuIIClassName}
//       >
//         {text}
//       </button>
//     );
//   }
// }
export default ToggleButton;
