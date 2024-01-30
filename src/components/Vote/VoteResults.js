const VoteResults = ({
  total,
  democratsPercentage,
  respubliconsPercentage,
}) => {
  return (
    <>
      <p>Total: {total}</p>
      <p>Democrats persent: {democratsPercentage}%</p>
      <p>Respublicons persent: {respubliconsPercentage}%</p>
    </>
  );
};
export default VoteResults;
