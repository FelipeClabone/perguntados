import styled, { createGlobalStyle } from 'styled-components';

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
  width: 20%;
`;

export const CenterSection = styled(SectionBase)`
  background-color: #00F0FF;
  width: 50%;
`;

export const RightSection = styled(SectionBase)`
  background-color: #FF4500;
  width: 30%;
`;

export const Title = styled.h1`
  color: #333;
`;

export const Subtitle = styled.p`
  font-size: 18px;
`;
