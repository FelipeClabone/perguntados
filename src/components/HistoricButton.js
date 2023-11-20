import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const HistoricButton = ({ text, cor, onClick  }) => {
  return <Button  onClick={onClick} cor={cor}>{text}</Button>;
};

HistoricButton.propTypes = {
  text: PropTypes.string.isRequired,
  cor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default HistoricButton;
