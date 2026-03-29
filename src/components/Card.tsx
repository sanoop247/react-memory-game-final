import React, { useState } from 'react';
import '../styles/card.css';

function Card({ value, isFlipped, isMatched, isMismatched, onClick }) {
  return (
    <>
      <div
        className={`card ${isMatched ? 'matched-card' : ''} ${
          isMismatched ? 'mismatched-card' : ''
        } ${isFlipped ? 'flipped-card' : ''}`}
        onClick={onClick}
      >
        {isFlipped ? value : ''}
      </div>
    </>
  );
}

export default Card;
