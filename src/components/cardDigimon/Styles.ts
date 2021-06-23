import styled from 'styled-components';

export const Container = styled.div`
  width: 230px;
  height: 230px;
  padding: 10px;
  margin: 10px;
  background-color: rgb(0, 0, 110);
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;

  :hover {
    background-color: #000085;
  }
`;

export const Image = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
`;
