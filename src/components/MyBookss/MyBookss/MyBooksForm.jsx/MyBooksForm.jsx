import { useState, Component, useMemo, memo } from 'react';
import { nanoid } from 'nanoid';

import styles from './my-books-form.module.css';

const INITIAL_STATE = {
  title: '',
  author: '',
};
const MyBooksForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handalChanch = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const handaleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    onSubmit({ ...state });
    reset();
  };
  const reset = () => {
    setState({ ...INITIAL_STATE });
  };

  const bookTitleId = useMemo(() => nanoid(), []);
  const bookAuthorId = useMemo(() => nanoid(), []);

  const { title, author } = state;

  return (
    <form onSubmit={handaleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor={bookTitleId}>Book titel</label>
        <input
          value={title}
          required
          name="title"
          onChange={handalChanch}
          id={bookTitleId}
          placeholder="Book titel"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor={bookAuthorId}>Book author</label>
        <input
          value={author}
          required
          name="author"
          onChange={handalChanch}
          id={bookAuthorId}
          placeholder="Book author"
        />
      </div>
      <button type="submit">Add book</button>
    </form>
  );
};

// const INITIAL_STATE = {
//   title: '',
//   author: '',
// };

// class MyBooksForm extends Component {
//   bookTitleId = nanoid();
//   bookAuthorId = nanoid();

//   state = { ...INITIAL_STATE };

//   handalChanch = ({ target }) => {
//     const { name, value } = target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handaleSubmit = e => {
//     e.preventDefault();
//     // console.log(this.state);
//     this.props.onSubmit({ ...this.state });
//     this.reset();
//   };

//   reset() {
//     this.setState({ ...INITIAL_STATE });
//   }

//   render() {
//     const { bookTitleId, bookAuthorId, handaleSubmit, handalChanch } = this;
//     const { title, author } = this.state;
//     return (
//       <form onSubmit={handaleSubmit} className={styles.form}>
//         <div className={styles.formGroup}>
//           <label htmlFor={bookTitleId}>Book titel</label>
//           <input
//             value={title}
//             required
//             name="title"
//             onChange={handalChanch}
//             id={bookTitleId}
//             placeholder="Book titel"
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor={bookAuthorId}>Book author</label>
//           <input
//             value={author}
//             required
//             name="author"
//             onChange={handalChanch}
//             id={bookAuthorId}
//             placeholder="Book author"
//           />
//         </div>
//         <button type="submit">Add book</button>
//       </form>
//     );
//   }
// }
export default memo(MyBooksForm);
