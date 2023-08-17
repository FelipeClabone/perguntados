import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin-right: 10%;
  margin-bottom: 5%;
  padding: 10px 20px;
  background-color: ${props => props.cor ? '#00FF00' : '#FF0000'};
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 14px;
  }
`;

const HistoricButton = ({ text, cor }) => {
  return <Button cor={cor}>{text}</Button>;
};

export default HistoricButton;
