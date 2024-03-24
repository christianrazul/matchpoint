import { Box } from '@mui/material';
import TournamentBracket from '../components/TournamentBracket';
import { players } from '../common/players';
import { Player } from './ScoreboardPage/ScoreboardPage';
import { useState } from 'react';
import Scoreboard, { initialPlayerState } from '../components/Scoreboard/Scoreboard';

const TournamentPage = () => {
  const [winner, setWinner] = useState<Player>(initialPlayerState);

  return (
    <Box>
      <TournamentBracket players={players} matchId={1} winner={winner} />
      <Scoreboard players={players} maxScore={3} winningPlayer={player => setWinner(player)} />
    </Box>
  );
};

export default TournamentPage;
