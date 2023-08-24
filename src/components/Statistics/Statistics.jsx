import PropTypes from 'prop-types';
import { Statistic,StatList,Span,Titel } from "./Statistics.styled"


export const Statistics = ({titel,stats}) => {
    return <Statistic>
    <Titel>Upload stats</Titel>
    <StatList>{stats.map(stat => (
        <li className="item" key={stat.id}>
        <Span>{stat.label}</Span>
        <span className="percentage">{stat.percentage}%</span>
      </li>
    ) 
    )}</StatList>
    </Statistic>
}

// Statistics.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(
//     shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };