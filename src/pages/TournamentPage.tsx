import { Box } from '@mui/material';
import TournamentBracket from '../components/TournamentBracket';
import { players } from '../common/players';
import { useState } from 'react';
import Scoreboard, { Match, initialMatchState } from '../components/Scoreboard/Scoreboard';

const TournamentPage = () => {
  const [matchDetails, setMatchDetails] = useState<Match>(initialMatchState);

  console.log(matchDetails);

  return (
    <Box>
      {/* <TournamentBracket players={players} match={matchDetails} winner={matchDetails.winner || initialPlayerState} /> */}
      <TournamentBracket match={matchDetails} />
      <Scoreboard players={players} maxScore={4} match={match => setMatchDetails(match)} />
    </Box>
  );
};

export default TournamentPage;
