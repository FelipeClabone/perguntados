import styled, { createGlobalStyle } from 'styled-components';



export const StyledStarBox = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 30vh;
  height: 10vh;
  margin-bottom: 60px;
`

export const StyledEstrela = styled.img`
  width: 50px;
  height: 50px;
  margin: 5%

`;

export const StyledRoleta = styled.img`
  width: 400px;
  height: 400px;
  transform: rotate(-10deg); /* Inicialmente, a rotação é 0 */
  transition: transform 2s ease-in-out; /* Duração da animação de 2 segundos */

`;


export const StyledQuestionBox = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 100%;
  height: 20vh;
  margin-bottom: 15px;

`

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
  background-color: #FFD700;
  width: 30%;
`;

export const CenterSection = styled(SectionBase)`
  display: flex;
  justify-content: center; 
  background-color: #00F0FF;
  width: 50%;
`;

export const RightSection = styled(SectionBase)`
  background-color: #FF4500;
  width: 20%;
`;

export const Title = styled.h1`
  color: #333;
`;

export const Subtitle = styled.p`
  font-size: 18px;
`;
