import { Box, Button } from '@mui/material';
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

  const addScore = () => {
    setScore(score + 1);
    if (score === maxScore) {
      onWinner(player);
    }
  };

  const removeScore = () => {
    setScore(score - 1);
  };

  // effect that resets the score when reset is true
  useEffect(() => {
    if (reset === true) {
      setScore(0);
    }
  }, [reset]);

  return (
    <div style={{ backgroundColor: playerColor }} className='scoreBox'>
      <h2>PLAYER {player}</h2>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          onClick={removeScore}
          style={{ fontSize: '52px', color: 'white', width: '100%', height: '100%' }}
          disabled={score === 0}
        >
          -
        </Button>
        <h1>{score}</h1>
        <Button
          onClick={addScore}
          style={{ fontSize: '52px', color: 'white', width: '100%', height: '100%' }}
          disabled={score > maxScore || hasWon}
        >
          +
        </Button>
      </Box>
    </div>
  );
};

export default ScoreBox;
