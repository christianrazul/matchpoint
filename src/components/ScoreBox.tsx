import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Player } from '../pages/ScoreboardPage/ScoreboardPage';

interface Props {
  player: Player;
  maxScore: number;
  onWinner: (player: Player) => void;
  hasWon?: boolean;
  reset?: boolean;
}

const ScoreBox = ({ player, maxScore, onWinner, hasWon, reset }: Props) => {
  const [score, setScore] = useState(0);

  // effect that resets the score when reset is true
  useEffect(() => {
    if (reset === true) {
      setScore(0);
    }
  }, [reset]);

  const addScore = () => {
    setScore(score + 1);
    if (score === maxScore) {
      onWinner({ playerId: player.playerId, name: player.name, color: player.color, score: score });
    }
  };

  const removeScore = () => {
    setScore(score - 1);
  };

  return (
    <div style={{ backgroundColor: player.color }} className='scoreBox'>
      <h2>PLAYER {player.name}</h2>
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
