import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  padding: 8px;
  margin: 0;
  width: 475px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #d3d3d3;
  background-color: white;
`;
export const Description = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const Name = styled.p`
  font-size: 30px;
  font-weight: 500;
  border-radius: 50%;
  text-align: center;
  color: #000;
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  display: block;
  width: 100px;
  border-radius: 50%;
  color: grey;
`;
export const Status = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  list-style: none;
  justify-content: center;
  padding: 0;
`;
export const Label = styled.span`
  color: #a09f9e;
  font-size: 20px;
`;

export const Tag = styled.p`
  font-size: 20px;
  text-align: center;
  color: #a09f9e;
  margin-bottom: 20px;
`;

export const Location = styled.p`
  font-size: 20px;
  text-align: center;
  color: #a09f9e;
  margin-bottom: 20px;
`;

export const Quantity = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #000;
`;
export const StatsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 17px;
  border: 1px solid #a09f9e;
`;
