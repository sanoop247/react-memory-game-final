import React, { useState } from 'react';
import Header from './components/Header';
import Gameboard from './components/Gameboard';
import GameResult from './components/GameResult';
import Timer from './components/Timer';

export default function App() {
  const [isGameWon, setisGameWon] = useState(false);
  const [restartCounter, setrestartCounter] = useState(0);
  const [gameTime, setgameTime] = useState(0);

  const restartGameHandler = () => {
    setisGameWon(false);
    setrestartCounter((prev) => prev + 1);
    setgameTime(0);
  };

  return (
    <div>
      <Header />
      <Timer time={gameTime} />
      <Gameboard
        key={restartCounter}
        onGameEnd={setisGameWon}
        gameTime={gameTime}
        setgameTime={setgameTime}
      />
      {isGameWon && <GameResult onGameRestart={restartGameHandler} />}
    </div>
  );
}
