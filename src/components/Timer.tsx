import React, { useEffect, useState } from 'react';
import '../styles/timer.css';

function Timer({ time }) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const paddedMinutes = minutes < 10 ? `0${minutes}` : String(minutes);
  const paddedSeconds = seconds < 10 ? `0${seconds}` : String(seconds);
  return (
    <>
      <p className="timer">
        {paddedMinutes}:{paddedSeconds}
      </p>
    </>
  );
}
export default Timer;
