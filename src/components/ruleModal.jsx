import React from 'react';
import Popup from 'reactjs-popup';
import {
  PopupContainer,
  PopupContent,
  PopupCloseButton,
  PopupTitle,
  PopupText,
} from './ruleModalStyles';

const RulesPopup = ({ closeModal }) => {
  return (
    <Popup open modal closeOnDocumentClick onClose={closeModal}>
      <PopupContainer>
        <PopupContent>
          <PopupTitle>Regras do Jogo</PopupTitle>
          <PopupText>Aqui estão as regras do seu jogo.</PopupText>
          <PopupCloseButton onClick={closeModal}>Fechar</PopupCloseButton>
        </PopupContent>
      </PopupContainer>
    </Popup>
  );
};

export default RulesPopup;
