import React, { Component } from 'react';
import imgRoleta from '../img/roleta.png';
import engrenagem from '../img/engrenagem.png'
import estrelaCerta from '../img/coracaoCor.png'
import estrelaPreta from '../img/coracaoPreto.png'
import RulesPopup from '../components/ruleModal'; // Importe o componente do popup
import HistoricPopup from '../components/historicModal'
import axios from 'axios'

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
  StyledEstrela,
} from './styles';
import HistoricButton from '../components/HistoricButton';


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      showDiv1: true,
      spinning: false,
      showRulesPopup: false,
      showHistoricPopup: false,
      rotation: 10,
      finalRotation: 0,
      pontuacao: 3,
      buttonClicked: null,
      buttonCorrect: 2,
      buttonColors: ["white", "white", "white", "white"],
      pergunta: "",
      respostas: [],
      idPerguntaMain: 0,
      indexHistoric: 0
    };
  }

handleShowHistoricPopup = () => {
    console.log("Apertou botao historico")
    this.setState({ showHistoricPopup: true });
  };
  handleCloseHistoricPopup = () => {
    this.setState({ showHistoricPopup: false });
  };
  

clickedHistory = async (entry) => {
    console.log(entry)

    const res = await axios.get("http://localhost:8800/pergunta/" + entry[0]);
    
    this.setState({
      indexHistoric: res.data // ou apenas indexHistoric, já que os nomes coincidem
    });
    console.log("RESSSSS")
    console.log(this.state.indexHistoric)

    const idPergunta = 0
    
    const pergunta = res.data[idPergunta].pergunta;


    this.handleShowHistoricPopup()
  }
  

  shuffleArray() 
  {
      var array = ["g",2,3,4]    
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }


getPergunta = async (categoria) => {
  try {
    const res = await axios.get("http://localhost:8800/categoria/" + categoria);
    

    const tamanho = Object.keys(res.data).length
    const idPergunta = Math.floor(Math.random() * tamanho)
    console.log("Tamanho: "+ tamanho)
    console.log("Pergunta: "+ idPergunta)
    
    const pergunta = res.data[idPergunta].pergunta;

    // Embaralhe as respostas
    const respostasEmbaralhadas = this.shuffleArray();
    var respostaCorreta = 0
    for (let i = respostasEmbaralhadas.length - 1; i > -1; i--) {
      console.log(respostasEmbaralhadas[i])
      if(respostasEmbaralhadas[i] === "g"){
        respostasEmbaralhadas[i] = res.data[idPergunta].gabarito
        respostaCorreta = i+1
      }
      if(respostasEmbaralhadas[i] === 2){
        respostasEmbaralhadas[i] =res.data[idPergunta].resposta2
      }
      if(respostasEmbaralhadas[i] === 3){
        respostasEmbaralhadas[i] =res.data[idPergunta].resposta3
      }
      if(respostasEmbaralhadas[i] === 4){
        respostasEmbaralhadas[i] =res.data[idPergunta].resposta4
      }
    }

    console.log(respostasEmbaralhadas);
    console.log("AQUI: " + res.data[idPergunta].id)


    this.setState(
      {
        pergunta: pergunta,
        respostas: respostasEmbaralhadas,
        buttonCorrect:respostaCorreta,
        idPerguntaMain: res.data[idPergunta].id
      },
      () => {
        // Atualize a pergunta e as respostas no estado
      }
    );

  } catch (error) {
    console.log(error);
  }
}


// Função para iniciar a rotação com base no número sorteado
handleAddButton = () => {
  // Verifique se a roleta não está girando atualmente
  if (!this.state.spinning) {
    // Sorteie um número de graus entre 1080 e 5400 (equivalente a 3 a 15 voltas completas)
    var grausAleatorios = Math.floor(Math.random() * (5400 - 1080 + 1)) + 1080;

    var categoriaRoleta = 0;
    const voltasInteiras = grausAleatorios % 360;
    console.log(voltasInteiras)
    if (voltasInteiras > 0 && voltasInteiras < 60) {
      console.log("Caiu no 5")
      categoriaRoleta = 5
    }
    if (voltasInteiras >= 60 && voltasInteiras < 120) {
      console.log("Caiu no 4")
      categoriaRoleta = 4
    }
    if (voltasInteiras >= 120 && voltasInteiras < 180) {
      console.log("Caiu no 3")
      categoriaRoleta = 3
    }
    if (voltasInteiras >= 180 && voltasInteiras < 240) {
      console.log("Caiu no 2")
      categoriaRoleta = 2
    }

    if (voltasInteiras >= 240 && voltasInteiras < 300) {
      console.log("Caiu no 1")
      categoriaRoleta = 1
    }
    if (voltasInteiras >= 300 && voltasInteiras < 360) {
      console.log("Caiu no 6")
      categoriaRoleta = 6
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

      this.getPergunta(categoriaRoleta)
      this.setState(
        {
          spinning: false,
          showDiv1: !this.state.showDiv1,
        },
        () => {
          // AQUI DEVE SETAR A PERGUNTA E A RESPOSTA NAS VARIAVEIS
        }
      );
    }, 5000);
  }
};

handleAnswerButton = (buttonIndex) => {
  // Desabilite os botões enquanto a ação estiver sendo processada
  this.setState({ buttonClickedIndex: buttonIndex });

  // Defina todos os botões como vermelhos (botão errado)
  const buttonColors = ["red", "red", "red", "red"];
  buttonColors[this.state.buttonCorrect - 1] = "green";

  if (this.state.buttonCorrect === buttonIndex) {
    this.setState((prevState) => ({
      history: [...prevState.history, [ this.state.idPerguntaMain, true]],
    }), () => {
      console.log(this.state.history);
    });
  } else {
    if (this.state.pontuacao - 1 === 0) {
      this.setState((prevState) => ({
        history: [...prevState.history, [ this.state.idPerguntaMain, false]],
        pontuacao: this.state.pontuacao - 1 
      }), () => {
        console.log(this.state.history);
      });
    } else {
      this.setState({ pontuacao: this.state.pontuacao - 1 });
      this.setState((prevState) => ({
        history: [...prevState.history, [ this.state.idPerguntaMain, false]],
        pontuacao: this.state.pontuacao - 1 
      }), () => {
        console.log(this.state.history);
      });
    }
  }
  

  this.setState({ buttonColors });

  // Aguarde 10 segundos antes de alternar para a outra div
  setTimeout(() => {
    this.setState(
      (prevState) => ({
        showDiv1: !prevState.showDiv1,
        rotation: 10,
        buttonClickedIndex: null, // Redefina o índice do botão clicado
        buttonColors: ["white", "white", "white", "white"],
      }),
      () => {
        console.log("Alternando as divs após 10 segundos");
      }
    );
  }, 5000); // 10000 milissegundos (10 segundos)
};







handleShowRulesPopup = () => {
  console.log("Apertou botao engrenagem")
  this.setState({ showRulesPopup: true });
};
handleCloseRulesPopup = () => {
  this.setState({ showRulesPopup: false });
};




render() {
  const { history, showDiv1, rotation, pontuacao, pergunta, respostas,idPerguntaMain } = this.state;
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
            id="imagem-engrenagem"
            src={engrenagem}
            alt="Imagem"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '50px',
              height: '50px',
              margin: '10px',
              cursor: 'pointer',
            }}
            onClick={this.handleShowRulesPopup} // Adicione um evento de clique para mostrar o popup
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
                  <p>{pergunta}</p>
                </StyledQuestionBox>
                <div >
                  <StyledAnswerButton
                    onClick={() => this.handleAnswerButton(1)}
                    color={this.state.buttonColors[0]}// Use a cor do estado
                  >
                    {respostas[0]}
                  </StyledAnswerButton>
                  <StyledAnswerButton
                    onClick={() => this.handleAnswerButton(2)}
                    color={this.state.buttonColors[1]} // Use a cor do estado
                  >
                    {respostas[1]}
                  </StyledAnswerButton>
                  <StyledAnswerButton
                    onClick={() => this.handleAnswerButton(3)}
                    color={this.state.buttonColors[2]} // Use a cor do estado
                  >
                    {respostas[2]}
                  </StyledAnswerButton>
                  <StyledAnswerButton
                    onClick={() => this.handleAnswerButton(4)}
                    color={this.state.buttonColors[3]} // Use a cor do estado
                  >
                    {respostas[3]}
                  </StyledAnswerButton>



                </div>
              </Div01>
            )}
          </Subtitle>
        </CenterSection>
        <RightSection>
          {reversedHistory.map((entry, index) => (
            <HistoricButton key={index} text={`Pergunta ${reversedHistory.length - index}`} cor={entry[1]} onClick={() => this.clickedHistory(entry)}/>
          ))}
        </RightSection>
        {this.state.showRulesPopup && <RulesPopup closeModal={this.handleCloseRulesPopup} />}
        {this.state.showHistoricPopup && <HistoricPopup closeModal={this.handleCloseHistoricPopup} res={this.state.indexHistoric} />}

      </StyledMain>
    </>
  );
}
}

export default Index;