import { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './my-books.module.css';

import MyBooksForm from './MyBooksForm.jsx/MyBooksForm';
import BookList from './BookList/BookList';

class MyBooks extends Component {
  state = {
    books: [
      {
        id: nanoid(),
        title: 'Girl genius',
        author: 'Foglio',
      },
    ],
    filter: '',
  };

  isDublicate({ title, author }) {
    const { books } = this.state;
    const normalizedTitle = title.toLowerCase();
    const normalizedAuthor = author.toLowerCase();

    const dublicate = books.find(item => {
      const normalizedCurrentTitle = item.title.toLowerCase();
      const normalizedCurrentAuthor = item.author.toLowerCase();
      return (
        normalizedCurrentTitle === normalizedTitle &&
        normalizedCurrentAuthor === normalizedAuthor
      );
    });

    return Boolean(dublicate);
  }

  addBook = data => {
    if (this.isDublicate(data)) {
      return alert(
        `Book with ${data.title} and ${data.author} already in list`
      );
    }

    this.setState(({ books }) => {
      const newBook = {
        id: nanoid(),
        ...data,
      };

      return {
        books: [...books, newBook],
      };
    });
  };

  deleteBook = id => {
    this.setState(({ books }) => {
      const newBooks = books.filter(item => item.id !== id);

      return {
        books: newBooks,
      };
    });
  };

  changeFitler = ({ target }) => {
    this.setState({
      filter: target.value,
    });
  };

  getFilteredBooks() {
    const { filter, books } = this.state;
    if (!filter) {
      return books;
    }

    const normalizedFilter = filter.toLowerCase();

    const filteredBooks = books.filter(({ title, author }) => {
      const normalizedTitle = title.toLowerCase();
      const normalizedAuthor = author.toLowerCase();

      return (
        normalizedAuthor.includes(normalizedFilter) ||
        normalizedTitle.includes(normalizedFilter)
      );
    });

    return filteredBooks;
  }

  render() {
    const { addBook, deleteBook, changeFitler } = this;
    const books = this.getFilteredBooks();

    return (
      <div className={styles.wrapper}>
        <MyBooksForm onSubmit={addBook} />
        <div className={styles.listWrapper}>
          <input onChange={changeFitler} name="filter" placeholder="Search" />
          <BookList items={books} deleteBook={deleteBook} />
        </div>
      </div>
    );
  }
}

export default MyBooks;

// class MyBooks extends Component {
//   state = {
//     books: [
//       {
//         id: nanoid(),
//         title: 'Girl genius',
//         author: 'Foglio',
//       },
//     ],
//     filter: '',
//   };

//   isDublicate({ title, author }) {
//     const { books } = this.state;
//     const normalizedTitle = title.toLowerCase();
//     const normalizedAuthor = author.toLowerCase();

//     const dublicate = books.find(item => {
//       const normalizedCurrentTitle = item.title.toLowerCase();
//       const normalizedCurrentAuthor = item.author.toLowerCase();
//       return (
//         normalizedCurrentTitle === normalizedTitle &&
//         normalizedCurrentAuthor === normalizedAuthor
//       );
//     });

//     return Boolean(dublicate);
//   }

//   addBook = data => {
//     if (this.isDublicate(data)) {
//       return alert(
//         `Book with ${data.title} and ${data.author} already in list`
//       );
//     }
//     this.setState(({ books }) => {
//       const newBook = {
//         id: nanoid(),
//         ...data,
//       };
//       return [...books, newBook];
//     });
//   };

//   deletBook = id => {
//     this.setState(({ books }) => {
//       const newBooks = books.filter(item => item.id !== id);
//       return { books: newBooks };
//     });
//   };

//   changeFitler = ({ target }) => {
//     this.setState({
//       filter: target.value,
//     });
//   };

//   getFilteredBooks() {
//     const { filter, books } = this.state;
//     if (!filter) {
//       return books;
//     }
//     const normalizedFilter = filter.toLowerCase();
//     const filteredBooks = books.filter(({ title, author }) => {
//       const normalizedTitle = title.toLowerCase();
//       const normalizedAuthor = author.toLowerCase();

//       return (
//         normalizedAuthor.includes(normalizedFilter) ||
//         normalizedTitle.includes(normalizedFilter)
//       );
//     });
//     return filteredBooks;
//   }

//   render() {
//     const books = this.getFilteredBooks();
//     const { addBook, deletBook, changeFitler } = this;

//     return (
//       <div className={styles.wrapper}>
//         <MyBooksForm onSubmit={addBook} />
//         <div className={styles.listWrapper}>
//           <input onChange={changeFitler} name="filter" placeholder="Search" />
//           <BookList item={books} deletBook={deletBook} />
//         </div>
//       </div>
//     );
//   }
// }
// export default MyBooks;
