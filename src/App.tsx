import React from 'react';
import { StyledButton } from './styles/buttons';
import { StyledParagraph, StyledTitle } from './styles/typography';

function App() {
  return (
    <div className="App">
      <StyledTitle tag="h2" fontWeight={700} fontSize="md">Pokédashboard</StyledTitle>
      <StyledParagraph fontSize="md">Está é uma aplicação para o aprendizado de Styled Components</StyledParagraph>
      <StyledButton buttonSize="lg" buttonStyle="outline">Teste</StyledButton>
    </div>
  );
}

export default App;
