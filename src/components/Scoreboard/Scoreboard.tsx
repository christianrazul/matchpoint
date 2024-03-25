import { Box, Stack } from '@mui/material';
import ScoreBox from '../Scorebox/ScoreBox';
import { useEffect, useState } from 'react';
import { Player } from '../../pages/ScoreboardPage/ScoreboardPage';
import './Scoreboard.css';
import ScoreboardWinnerModal from '../ScoreboardWinnerModal';

export const initialPlayerState: Player = {
  playerId: 0,
  name: '',
  color: '',
  score: 0,
};

export const initialMatchState: Match = {
  id: 0,
  players: [],
  winner: initialPlayerState,
  loser: initialPlayerState,
  finished: false,
};

export interface Match {
  id: number;
  players: Player[];
  winner?: Player;
  loser?: Player;
  finished: boolean;
}
interface ScoreboardProps {
  players: Player[];
  maxScore: number;
  match?: (match: Match) => void;
  hasWon?: boolean;
  reset?: boolean;
}

const Scoreboard = ({ players, maxScore, match }: ScoreboardProps) => {
  const [winner, setWinner] = useState<Player>(initialPlayerState);
  const [loser, setLoser] = useState<Player>(initialPlayerState);
  const [hasWon, setHasWon] = useState(false);
  const [resetScores, setResetScores] = useState(false);

  useEffect(() => {
    if (winner.score === maxScore) {
      setHasWon(true);
    }
  }, [winner, loser]);

  // useEffect that resets the score when reset is true
  useEffect(() => {
    if (resetScores) {
      setWinner(initialPlayerState);
      setHasWon(false);
      setResetScores(false);
    }
  }, [resetScores]);

  // effect that sets the match details when hasWon is true
  useEffect(() => {
    if (hasWon && match !== undefined) {
      match({ id: 1, players: players, winner: winner, loser: loser, finished: true });
    }
  }, [loser]);

  return (
    <Box>
      {hasWon ? (
        <ScoreboardWinnerModal hasWon={hasWon} winner={winner} resetScores={reset => setResetScores(reset)} />
      ) : null}
      <Stack className='boxContainer'>
        <ScoreBox
          player={players[0]}
          maxScore={maxScore}
          onWinner={player => {
            setWinner(player);
          }}
          onLoser={player => {
            setLoser(player);
          }}
          hasWon={hasWon}
          reset={resetScores}
        />
        <ScoreBox
          player={players[1]}
          maxScore={maxScore}
          onWinner={player => {
            setWinner(player);
          }}
          onLoser={player => {
            setLoser(player);
          }}
          hasWon={hasWon}
          reset={resetScores}
        />
      </Stack>
    </Box>
  );
};

export default Scoreboard;
