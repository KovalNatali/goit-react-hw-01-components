import './movie-list.css';

const MoveList = ({ title, movelist }) => {
  return (
    <>
      <h3>{title}</h3>
      <ul className="movie-list">
        {movelist.map(({ id, title, year }) => (
          <li key={id}>
            {title}, {year}
          </li>
        ))}
      </ul>
    </>
  );
};
export default MoveList;
