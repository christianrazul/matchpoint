import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Match, initialMatchState } from '../components/Scoreboard/Scoreboard';
import TournamentForm, { FormValues } from '../components/TournamentForm';
const TournamentPage = () => {
  const [matchDetails, setMatchDetails] = useState<Match>(initialMatchState);

  const [data, setData] = useState<FormValues>();

  const [number, setNumber] = useState(0);
  const [test, setTest] = useState(false);

  const increment = () => {
    setNumber(number + 1);
    if (number === 2) {
      setTest(true);
    }
  };
  B;
  useEffect(() => {
    console.log('effect runs');
  }, [test]);

  return (
    <Box>
      {/* <TournamentBracket match={matchDetails} />
      <Scoreboard players={players} maxScore={4} match={match => setMatchDetails(match)} /> */}
      <TournamentForm formDataProps={formData => setData(formData)} />
    </Box>
  );
};

export default TournamentPage;
