import './movie-list.css';
import MoveListItem from './MoveListItem';

const MoveList = ({ title, movelist }) => {
  return (
    <>
      <h3>{title}</h3>
      <ul className="movie-list">
        {movelist.map(({ id, title, year }) => (
          <MoveListItem key={id} title={title} year={year} />
        ))}
      </ul>
    </>
  );
};
export default MoveList;
