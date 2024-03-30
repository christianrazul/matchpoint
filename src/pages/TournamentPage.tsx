import { Box } from '@mui/material';
import { useState } from 'react';
import { Match, initialMatchState } from '../components/Scoreboard/Scoreboard';
import TournamentForm from '../components/TournamentForm';
const TournamentPage = () => {
  const [matchDetails, setMatchDetails] = useState<Match>(initialMatchState);

  console.log(matchDetails);

  return (
    <Box>
      {/* <TournamentBracket players={players} match={matchDetails} winner={matchDetails.winner || initialPlayerState} /> */}
      {/* <TournamentBracket match={matchDetails} />
      <Scoreboard players={players} maxScore={4} match={match => setMatchDetails(match)} /> */}
      <TournamentForm />
    </Box>
  );
};

export default TournamentPage;
