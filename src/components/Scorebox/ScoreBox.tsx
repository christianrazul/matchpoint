import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Player } from '../../pages/ScoreboardPage/ScoreboardPage';
import './ScoreBox.css';
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

  // effect that sets the winner when the score reaches the max score
  useEffect(() => {
    if (score === maxScore) {
      onWinner({ playerId: player.playerId, name: player.name, color: player.color, score: score });
    }
  }, [score]);

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
    <Box bgcolor={player.color} className='scoreboxContainer'>
      <h2>{player.name}</h2>
      <Box className='scorebox'>
        <Button onClick={removeScore} className='buttons' disabled={score === 0}>
          -
        </Button>
        <h1>{score}</h1>
        <Button onClick={addScore} className='buttons' disabled={score > maxScore || hasWon}>
          +
        </Button>
      </Box>
    </Box>
  );
};

export default ScoreBox;
