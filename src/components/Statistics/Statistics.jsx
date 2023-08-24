
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

// 
