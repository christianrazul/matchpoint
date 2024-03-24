import { Box, Stack } from '@mui/material';
import ScoreBox from '../Scorebox/ScoreBox';
import { useEffect, useState } from 'react';
import { Player } from '../../pages/ScoreboardPage/ScoreboardPage';
import './Scoreboard.css';

export const initialPlayerState: Player = {
  playerId: 0,
  name: '',
  color: '',
  score: 0,
};

interface ScoreboardProps {
  players: Player[];
  maxScore: number;
  onWinner: (player: Player) => void;
  hasWon?: boolean;
  reset?: boolean;
}

const Scoreboard = ({ players, maxScore, onWinner, reset }: ScoreboardProps) => {
  const [winner, setWinner] = useState<Player>(initialPlayerState);
  const [hasWon, setHasWon] = useState(false);
  const [resetScores, setResetScores] = useState(false);

  useEffect(() => {
    if (resetScores) {
      setWinner(initialPlayerState);
      setHasWon(false);
      setResetScores(false);
    }
  }, [resetScores]);
  return (
    <Box>
      <Stack className='boxContainer'>
        <ScoreBox
          player={players[0]}
          maxScore={maxScore}
          onWinner={player => {
            setWinner(player);
            setHasWon(true);
          }}
          reset={resetScores}
        />
        <ScoreBox
          player={players[1]}
          maxScore={maxScore}
          onWinner={player => {
            setWinner(player);
            setHasWon(true);
          }}
          reset={resetScores}
        />
      </Stack>
    </Box>
  );
};

export default Scoreboard;
