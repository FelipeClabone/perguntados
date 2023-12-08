import styled, { createGlobalStyle } from 'styled-components';



export const StyledStarBox = styled.div`
  background-color: #ffffff;
  margin-left: 180px;
  border-radius: 10px;
  width: 25vh;
  height: 6vh;
  margin-bottom: 60px;
`

export const StyledEstrela = styled.img`
  width: 40px;
  height: 40px;
  margin: 5%

`;

export const StyledRoleta = styled.img`
  width: 550;
  height: 550px;
  transform: rotate(-10deg); /* Inicialmente, a rotação é 0 */
  transition: transform 2s ease-in-out; /* Duração da animação de 2 segundos */

`;


export const StyledQuestionBox = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 100%;
  min-height: 20vh; /* Altura mínima desejada */
  max-height: 40vh; /* Altura máxima desejada */
  overflow-y: auto; /* Adicione uma barra de rolagem vertical se o conteúdo for muito longo */
  margin-bottom: 15px;
  padding: 10px; /* Adicione algum preenchimento interno para espaçamento */

  /* Outros estilos existentes */
`;

export const Div01 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledAnswerButton = styled.button`
background-color: ${(props) => props.color};
  border-radius: 10px;
  width: 100%;
  height: 4vh;
  margin: 10px;
  margin-top: 30px;
  transition: background-color 0.3s ease; /* Adiciona uma transição suave de cor */
  cursor: pointer;
  
`;

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #00F0FF;
    font-family: sans-serif;
  }
`;

export const StyledMain = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
`;

export const SectionBase = styled.section`
  text-align: center; 
  background-color: white;
  padding: 3%;
`;

export const LeftSection = styled(SectionBase)`
  background-color: #00F0FF;
  width: 20%;
`;

export const CenterSection = styled(SectionBase)`
  display: flex;
  justify-content: center; 
  background-color: #00F0FF;
  width: 50%;
`;

export const RightSection = styled(SectionBase)`
  background-color: #00F0FF;
  width: 20%;
`;

export const Title = styled.h1`
  color: #333;
`;

export const Subtitle = styled.p`
  font-size: 18px;
`;
