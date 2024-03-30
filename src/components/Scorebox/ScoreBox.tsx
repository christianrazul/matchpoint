import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Player } from '../../pages/ScoreboardPage/ScoreboardPage';
import './ScoreBox.css';
interface Props {
  player: Player;
  maxScore: number;
  onWinner: (player: Player) => void;
  onLoser: (player: Player) => void;
  hasWon?: boolean;
  reset?: boolean;
}

// TODO: refactor player prop to get data from match (if available) or settings (to make)
// TODO: refactor maxScore prop to get data from match (if available) or settings (to make)

const ScoreBox = ({ player, maxScore, onWinner, onLoser, hasWon, reset }: Props) => {
  const [score, setScore] = useState(0);

  // effect that resets the score when reset is true
  useEffect(() => {
    if (reset === true) {
      setScore(0);
    }
  }, [reset]);

  useEffect(() => {
    if (score === maxScore) {
      onWinner({ playerId: player.playerId, name: player.name, color: player.color, score: score });
    }
  }, [score]);

  // effect that passes the values of the player to the parent component when hasWon is true
  useEffect(() => {
    if (hasWon) {
      if (score !== maxScore) {
        onLoser({ playerId: player.playerId, name: player.name, color: player.color, score: score });
      }
    }
  }, [hasWon]);

  const addScore = () => {
    setScore(score + 1);
  };

  const removeScore = () => {
    setScore(score - 1);
  };

  return (
    <Box bgcolor={player.color} className='scoreboxContainer'>
      <h2>{player.name}</h2>
      <Box className='scorebox'>
        <Button onClick={removeScore} className='buttons' disabled={score === 0 || hasWon}>
          -
        </Button>
        <h1>{score}</h1>
        <Button onClick={addScore} className='buttons' disabled={hasWon}>
          +
        </Button>
      </Box>
    </Box>
  );
};

export default ScoreBox;
