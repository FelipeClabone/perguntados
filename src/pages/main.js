import React, { Component } from 'react';
import imgRoleta from '../img/roleta.png';
import engrenagem from '../img/engrenagem.png'
import estrelaCerta from '../img/estrelaCor.png'
import estrelaPreta from '../img/estrelaPreta.png'

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
  StyledRoleta,
  StyledStarBox,
  StyledEstrela
} from './styles';
import HistoricButton from '../components/HistoricButton';


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      showDiv1: true,
      spinning: false,
      rotation: 10,
      finalRotation: 0,
      pontuacao: 3,
    };
  }



  // Função para iniciar a rotação com base no número sorteado
  handleAddButton = () => {
    console.log('botao clicado');
    // Verifique se a roleta não está girando atualmente
    if (!this.state.spinning) {
      // Sorteie um número de graus entre 1080 e 5400 (equivalente a 3 a 15 voltas completas)
      var grausAleatorios = Math.floor(Math.random() * (5400 - 1080 + 1)) + 1080;


      const voltasInteiras = grausAleatorios % 360;
      console.log(voltasInteiras)
      if (voltasInteiras > 0 && voltasInteiras < 60) {
        console.log("Caiu no 5")
      }
      if (voltasInteiras >= 60 && voltasInteiras < 120) {
        console.log("Caiu no 4")
      }
      if (voltasInteiras >= 120 && voltasInteiras < 180) {
        console.log("Caiu no 3")
      }
      if (voltasInteiras >= 180 && voltasInteiras < 240) {
        console.log("Caiu no 2")
      }

      if (voltasInteiras >= 240 && voltasInteiras < 300) {
        console.log("Caiu no 1")
      }
      if (voltasInteiras >= 300 && voltasInteiras < 360) {
        console.log("Caiu no 6")
      }




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
                rotation: this.state.finalRotation,
              },
              () => {
                console.log('Rotação concluída');
              }
            );
          }, 1000); // 3000 milissegundos (3 segundos) - ajuste conforme necessário
        }
      );
      setTimeout(() => {
        this.setState(
          {
            spinning: false,
            showDiv1: !this.state.showDiv1,
          },
          () => {
            console.log('Estado orginal');
          }
        );
      }, 5000);
    }
  };


  handleAnswerButton = () => {
    this.setState(
      prevState => ({
        history: [...prevState.history.slice(-6), `Botão ${prevState.history.length + 1}`],
        showDiv1: !prevState.showDiv1,
        rotation: 10,
      }),
      () => {
        console.log('Resposta selecionada e alternando as divs');
      }
    );
  }

  render() {
    const { history, showDiv1, rotation, pontuacao } = this.state;
    const reversedHistory = [...history].reverse();

    const estrelas = [];
    for (let i = 0; i < 3; i++) {
      if (i < pontuacao) {
        estrelas.push(
          <StyledEstrela
            key={i}
            src={estrelaCerta}
            alt="Estrela Certa"
          />
        );
      } else {
        estrelas.push(
          <StyledEstrela
            key={i}
            src={estrelaPreta}
            alt="Estrela Preta"
          />
        );
      }
    }

    return (
      <>
        <GlobalStyles />
        <StyledMain>
          <LeftSection>
            <Title>Seção Esquerda</Title>
            <Subtitle>Conteúdo da seção esquerda.</Subtitle>
            <img
              src={engrenagem}
              alt="Imagem"
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '50px',
                height: '50px',
                cursor: 'pointer', // Altere o cursor para indicar que a imagem é clicável
              }}
            
            />
          </LeftSection>
          <CenterSection>

            <Subtitle>
              {showDiv1 ? (
                <div>
                  <StyledStarBox>
                    {estrelas}
                  </StyledStarBox>
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
                    <p>Qual o tamanho da  do gaspar?</p>
                  </StyledQuestionBox>
                  <div >
                    <StyledAnswerButton onClick={this.handleAnswerButton}>tamanho da estatua da liberdade</StyledAnswerButton>
                    <StyledAnswerButton onClick={this.handleAnswerButton}>Tamanho da de um cavalo?</StyledAnswerButton>
                    <StyledAnswerButton onClick={this.handleAnswerButton}>3,5 cm</StyledAnswerButton>
                    <StyledAnswerButton onClick={this.handleAnswerButton}>Ele nao tem </StyledAnswerButton>
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
