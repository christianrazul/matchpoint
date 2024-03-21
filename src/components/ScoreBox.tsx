import { useEffect, useState } from 'react';

interface Props {
  player: number;
  maxScore: number;
  onWinner: (player: number) => void;
  hasWon?: boolean;
  reset: boolean;
}

const ScoreBox = ({ player, maxScore, onWinner, hasWon, reset }: Props) => {
  const [score, setScore] = useState(0);
  const playerColor = player === 1 ? '#228BE6' : '#FA5252';

  const handleClick = () => {
    setScore(score + 1);
    if (score === maxScore) {
      onWinner(player);
    }
  };

  // effect that resets the score when reset is true
  useEffect(() => {
    if (reset === true) {
      setScore(0);
    }
  }, [reset]);

  return (
    <button onClick={() => handleClick()} style={{ width: '358px', height: '302px', backgroundColor: playerColor }}>
      PLAYER {player}
      <h1>{score}</h1>
    </button>
  );
};

export default ScoreBox;
