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
          <PopupText>
    <p><strong>Objetivo do Jogo:</strong>
    O objetivo do jogo é ganhar pontos respondendo corretamente a perguntas em diversas categorias.</p>

    <p><strong>Regras Básicas:</strong></p>

    <ol>
        <li><strong>Categorias:</strong> O jogo apresenta diversas categorias, como escalonador, gerenciador de memória, dispositivos de entrada e saída e gerência de arquivos. Os jogadores precisam responder a perguntas nessas categorias.</li>

        <li><strong>Modos de Jogo:</strong></li>

        <ul>
            <li><strong>Clássico:</strong> Neste modo, os jogadores tentam somar o máximo de pontos que conseguir.</li>

            <li>
                <strong>Responder Perguntas:</strong> Os jogadores respondem a uma pergunta de múltipla escolha na categoria determinada pela roda da sorte.
            </li>
        </ul>

        <li>
            <strong>Pontuação:</strong> Responder corretamente ganha pontos, enquanto uma resposta errada perde 1 vida. O jogador começa com 3 vidas e acaba o jogo ao perder as 3.
        </li>
    </ol>
</PopupText>

          <PopupCloseButton onClick={closeModal}>Fechar</PopupCloseButton>
        </PopupContent>
      </PopupContainer>
    </Popup>
  );
};

export default RulesPopup;
