import React, { useState } from 'react';

interface Props {
  player: number;
}

const ScoreBox = ({ player }: Props) => {
  const [score, setScore] = useState(0);

  const playerColor = player === 1 ? 'red' : 'blue';

  return (
    <button
      onClick={() => setScore(score + 1)}
      style={{ width: '358px', height: '302px', backgroundColor: playerColor }}
    >
      Player {player}
      <h1>{score}</h1>
    </button>
  );
};

export default ScoreBox;
