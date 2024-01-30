import styles from './book-list.module.css';

const BooksList = ({ items, deleteBook }) => {
  const elements = items.map(({ id, title, author }) => (
    <li key={id}>
      Author: {author}. Title: {title}.
      <button onClick={() => deleteBook(id)} type="button">
        Delete
      </button>
    </li>
  ));

  return <ol className={styles.list}>{elements}</ol>;
};

export default BooksList;
