import { Transactionhistory,TableTitle } from "./transactions.styled";
import PropTypes from 'prop-types';

export const TransactionHistory = ({items}) => {
    return <Transactionhistory>
            <thead>
            <tr>
              <TableTitle>Type</TableTitle>
              <TableTitle>Amount</TableTitle>
              <TableTitle>Currency</TableTitle>
            </tr>
          </thead>{
        items.map(({ id, type, amount, currency }) => (
          <tbody key={id}>
            <tr>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          </tbody>
        ))}
        </Transactionhistory>
    
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};