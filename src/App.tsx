import React from 'react';
import GameList from './components/GameList';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import MyGames from './components/MyGames';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />   
      <GameList />
      <MyGames />
    </div>
  );
}

export default App;
