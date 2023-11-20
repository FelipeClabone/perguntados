import React from 'react';
import Popup from 'reactjs-popup';
import {
  PopupContainer,
  PopupContent,
  PopupCloseButton,
  PopupTitle,
  PopupText,
} from './ruleModalStyles';

const HistoricPopup = ({ closeModal, res }) => {
  // Certifique-se de verificar se res existe e tem o formato esperado antes de acessar as propriedades
  const pergunta = res[0]?.pergunta;
  const gabarito = res[0]?.gabarito;
  const resposta2 = res[0]?.resposta2;
  const resposta3 = res[0]?.resposta3;
  const resposta4 = res[0]?.resposta4;

  // Formatando as informações
  return (
    <Popup open modal closeOnDocumentClick onClose={closeModal}>
      <PopupContainer>
        <PopupContent>
          <PopupTitle>Pergunta</PopupTitle>
          <PopupText>{pergunta}<br /><br />
            <strong> {gabarito}</strong><br />
             <br />{resposta2}<br />
            <br /> {resposta3}<br />
            <br />{resposta4}
          </PopupText>
          <PopupCloseButton onClick={closeModal}>Fechar</PopupCloseButton>
        </PopupContent>
      </PopupContainer>
    </Popup>
  );
};

export default HistoricPopup;
