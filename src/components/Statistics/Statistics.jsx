import PropTypes, { shape } from 'prop-types';
import {
  StatisticsSection,
  StatisticsTitle,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => (
  <StatisticsSection>
    {title && <StatisticsTitle>{title}</StatisticsTitle>}
    <StatList>
      {stats.map(dataItem => (
        <StatItem key={dataItem.id}>
          <StatLabel>{dataItem.label}</StatLabel>
          <StatPercentage>{dataItem.percentage}%</StatPercentage>
        </StatItem>
      ))}
    </StatList>
  </StatisticsSection>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};