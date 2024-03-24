import { Box } from '@mui/material';
import TournamentBracket from '../components/TournamentBracket';
import { players } from '../players';
import ScoreBox from '../components/ScoreBox';
import { Player, initialPlayerState } from './ScoreboardPage/ScoreboardPage';
import { useEffect, useState } from 'react';

const TournamentPage = () => {
  const [winner, setWinner] = useState<Player>(initialPlayerState);
  const [hasWon, setHasWon] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (reset === true) {
      setWinner(initialPlayerState);
      setHasWon(false);
      setReset(false);
    }
  }, [reset]);

  return (
    <Box>
      <TournamentBracket players={players} matchId={1} winner={winner} />
      <div className='boxContainer'>
        <ScoreBox
          player={players[0]}
          maxScore={5}
          onWinner={player => {
            setWinner(player);
            setHasWon(true);
          }}
          reset={reset}
        />
        <ScoreBox
          player={players[1]}
          maxScore={5}
          onWinner={player => {
            setWinner(player);
            setHasWon(true);
          }}
          reset={reset}
        />
      </div>
    </Box>
  );
};

export default TournamentPage;
