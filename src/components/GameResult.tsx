import React from 'react';
import '../styles/gameResult.css';
export default function GameResult({ onGameRestart }) {
  return (
    <>
      <p className="win-text">You have won!!!!</p>
      <button className="play-again-btn" onClick={onGameRestart}>
        Play Again
      </button>
    </>
  );
}
