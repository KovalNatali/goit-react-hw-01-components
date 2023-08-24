import { Transactionhistory,TableTitle } from "./transactions.styled";

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
