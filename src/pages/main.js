import React, { Component } from 'react';
import { GlobalStyles, StyledMain, LeftSection, CenterSection, RightSection, Title, Subtitle } from './styles';
import HistoricButton from '../components/HistoricButton';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [], // Array para armazenar o histórico
    };
  }

  handleAddButton = () => {
    // Adicione um botão ao histórico e limite a 7 botões
    this.setState(prevState => ({
      history: [...prevState.history.slice(-6), `Botão ${prevState.history.length + 1}`],
    }));
  }

  render() {
    const reversedHistory = [...this.state.history].reverse(); // Inverter a ordem do histórico

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
              <div>
                {/* Conteúdo da seção central */}
              </div>
              <div>
                <button onClick={this.handleAddButton}>Jogar</button>
              </div>
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
