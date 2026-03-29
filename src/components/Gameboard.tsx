import React, { useState, useMemo, useEffect } from 'react';
import Card from './Card';
import '../styles/gameBoard.css';

function Gameboard({ onGameEnd, gameTime, setgameTime }) {
  const [firstCard, setfirstCard] = useState(null);
  const [secondCard, setsecondCard] = useState(null);
  const [matchedCards, setmatchedCards] = useState([]);
  const [mismatchedCards, setmismatchedCards] = useState([]);
  const [isBoardLocked, setIsBoardLocked] = useState(false);
  const [gameStarted, setgameStarted] = useState(false);

  useEffect(() => {
    if (matchedCards.length == shuffledCards.length) {
      setgameStarted(false);
      onGameEnd(true);
    }
  }, [matchedCards]);

  useEffect(() => {
    if (!gameStarted) return;
    const timerInterval = setInterval(() => {
      setgameTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [gameStarted]);

  const shuffledCards = useMemo(() => {
    const cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
    for (let i = cards.length - 1; i > 0; i--) {
      // Pick a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));

      // Swap elements at index i and j
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }, []);

  const handleCardClick = (id) => {
    if (isBoardLocked) return;
    if (matchedCards.includes(id)) return;
    if (id === firstCard) return;
    if (firstCard == null && secondCard == null) {
      setgameStarted(true);
    }
    if (firstCard == null) {
      setfirstCard(id);
    } else {
      setsecondCard(id);
      setIsBoardLocked(true);
      checkMatch(firstCard, id);
    }
  };

  const checkMatch = (firstCardId, secondCardId) => {
    if (shuffledCards[firstCardId] == shuffledCards[secondCardId]) {
      setmatchedCards((prev) => [...prev, firstCardId, secondCardId]);
      setfirstCard(null);
      setsecondCard(null);
      setIsBoardLocked(false);
    } else {
      setmismatchedCards([firstCardId, secondCardId]);
      setTimeout(() => {
        setmismatchedCards([]);
        setfirstCard(null);
        setsecondCard(null);
        setIsBoardLocked(false);
      }, 1000);
    }
  };
  return (
    <>
      <div className="game-board">
        {shuffledCards.map((value, id) => (
          <Card
            key={id}
            value={value}
            isFlipped={
              matchedCards.includes(id) || firstCard == id || secondCard == id
            }
            isMatched={matchedCards.includes(id)}
            isMismatched={mismatchedCards.includes(id)}
            onClick={() => handleCardClick(id)}
          />
        ))}
      </div>
    </>
  );
}

export default Gameboard;
