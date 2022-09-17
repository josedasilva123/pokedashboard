import React from 'react';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import { StyledButton } from './styles/buttons';
import { StyledParagraph, StyledTitle } from './styles/typography';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />      
    </div>
  );
}

export default App;
