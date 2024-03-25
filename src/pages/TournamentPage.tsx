import { Box } from '@mui/material';
import TournamentBracket from '../components/TournamentBracket';
import { players } from '../common/players';
import { Player } from './ScoreboardPage/ScoreboardPage';
import { useState } from 'react';
import Scoreboard, { Match, initialMatchState, initialPlayerState } from '../components/Scoreboard/Scoreboard';

const TournamentPage = () => {
  const [winner, setWinner] = useState<Player>(initialPlayerState);
  const [matchDetails, setMatchDetails] = useState<Match>(initialMatchState);

  console.log(matchDetails);

  return (
    <Box>
      {/* <TournamentBracket players={players} match={matchDetails} winner={matchDetails.winner || initialPlayerState} /> */}
      <TournamentBracket players={players} match={matchDetails} />
      <Scoreboard
        players={players}
        maxScore={4}
        winningPlayer={player => setWinner(player)}
        match={match => setMatchDetails(match)}
      />
    </Box>
  );
};

export default TournamentPage;
