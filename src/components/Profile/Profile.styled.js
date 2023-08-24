import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    padding: 8px;
    margin: 0;
    width: 350px;
    margin-left: auto;
    margin-right: auto; 
    border:1px solid #d3d3d3;
    background-color: white;
   `
export const Description = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
export const Name = styled.p`

`

export const Avatar = styled.img`
display: block;
width: 70px;
border-radius: 50%;
color: grey;
`
export const Status = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 12px;
list-style: none;
justify-content: center;
padding: 0;

`
export const Label = styled.span`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    list-style: none;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`