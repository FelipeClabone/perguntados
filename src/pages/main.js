import React, { Component } from 'react';
import imgRoleta from '../img/roleta.png';

// Importando estilos e componentes do seu código original
import {
  GlobalStyles,
  StyledMain,
  LeftSection,
  CenterSection,
  RightSection,
  Title,
  Subtitle,
  Div01,
  StyledQuestionBox,
  StyledAnswerButton,
  StyledRoleta
} from './styles';
import HistoricButton from '../components/HistoricButton';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      showDiv1: true,
      spinning: false,
      rotation: 0,
      finalRotation: 0,
    };
  }


  // Função para iniciar a rotação com base no número sorteado
  handleAddButton = () => {
    console.log('botao clicado');
    // Verifique se a roleta não está girando atualmente
    if (!this.state.spinning) {
      // Sorteie um número de graus entre 1080 e 5400 (equivalente a 3 a 15 voltas completas)
      const grausAleatorios = Math.floor(Math.random() * (5400 - 1080 + 1)) + 1080;

      // Defina a rotação final e inicie a rotação da roleta
      this.setState(
        {
          spinning: true,
          finalRotation: this.state.rotation + grausAleatorios, // Gire com base no número sorteado
        },
        () => {
          // Aguarde um período de tempo para permitir que a animação seja aplicada
          setTimeout(() => {
            this.setState(
              {
                spinning: false,
                rotation: this.state.finalRotation,
              },
              () => {
                console.log('Rotação concluída');
              }
            );
          }, 3000); // 3000 milissegundos (3 segundos) - ajuste conforme necessário
        }
      );
    }
  };


  handleAnswerButton = () => {
    this.setState(
      prevState => ({
        history: [...prevState.history.slice(-6), `Botão ${prevState.history.length + 1}`],
        showDiv1: !prevState.showDiv1,
      }),
      () => {
        console.log('Resposta selecionada e alternando as divs');
      }
    );
  }

  render() {
    const { history, showDiv1, rotation, spinning } = this.state;
    const reversedHistory = [...history].reverse();

    return (
      <>
        <GlobalStyles />
        <StyledMain>
          <LeftSection>
            <Title>Seção Esquerda</Title>
            <Subtitle>Conteúdo da seção esquerda.</Subtitle>
          </LeftSection>
          <CenterSection>
            <Title>Seção Central</Title>
            <Subtitle>
              {showDiv1 ? (
                <div>
                  <StyledRoleta
                    src={imgRoleta}
                    alt="Roleta"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                    }}
                    //className={spinning ? 'spin' : ''}
                  />
                  <StyledAnswerButton
                    onClick={this.handleAddButton}
                    disabled={this.state.spinning} // Desabilita o botão enquanto a roleta está girando
                  >Jogar</StyledAnswerButton>
                </div>
              ) : (
                <Div01 style={{ display: 'flex', flexDirection: 'column' }}>
                  <StyledQuestionBox>
                    <p>Qual o tamanho da pica do gaspar?</p>
                  </StyledQuestionBox>
                  <div >
                    <StyledAnswerButton onClick={this.handleAnswerButton}>tamanho da estatua da liberdade</StyledAnswerButton>
                    <StyledAnswerButton onClick={this.handleAnswerButton}>Tamanho da de um cavalo?</StyledAnswerButton>
                    <StyledAnswerButton onClick={this.handleAnswerButton}>3,5 cm</StyledAnswerButton>
                    <StyledAnswerButton onClick={this.handleAnswerButton}>Ele nao tem pica</StyledAnswerButton>
                  </div>
                </Div01>
              )}
            </Subtitle>
          </CenterSection>
          <RightSection>
            {reversedHistory.map((text, index) => (
              <HistoricButton key={index} text={text} cor={index % 2 === 0} />
            ))}
          </RightSection>
        </StyledMain>
      </>
    );
  }
}

export default Index;
