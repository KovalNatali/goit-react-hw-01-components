import { Component, useState } from 'react';

import styles from './posts-search-form.module.css';

const PostsSearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    search: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    onSubmit({ ...state });
    reset();
  };
  const reset = () => {
    setState({ search: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.fieldGroup}>
        <label>Enter search phrase</label>
        <input
          value={state.search}
          onChange={handleChange}
          type="text"
          name="search"
          placeholder="Enter search phrase"
        />
      </div>

      <button type="submit">Shearch</button>
    </form>
  );
};

// class PostsSearchForm extends Component {
//   state = {
//     search: '',
//   };

//   handleChange = ({ target }) => {
//     const { name, value } = target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit({ ...this.state });
//     this.setState({
//       search: '',
//     });
//   };

//   render() {
//     const { handleSubmit, handleChange } = this;
//     const { search } = this.state;
//     return (
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <div className={styles.fieldGroup}>
//           <label>Enter search phrase</label>
//           <input
//             value={search}
//             onChange={handleChange}
//             type="text"
//             name="search"
//             placeholder="Enter search phrase"
//           />
//         </div>

//         <button type="submit">Shearch</button>
//       </form>
//     );
//   }
// }

export default PostsSearchForm;
