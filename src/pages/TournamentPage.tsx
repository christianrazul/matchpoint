import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Match, initialMatchState } from '../components/Scoreboard/Scoreboard';
import TournamentForm, { FormValues } from '../components/TournamentForm';
import { players } from '../common/players';
import TournamentBracket from '../components/TournamentBracket';
const TournamentPage = () => {
  const [matchDetails, setMatchDetails] = useState<Match>(initialMatchState);

  const [data, setData] = useState<FormValues>();

  // id: number;
  // players: Player[];
  // winner?: Player;
  // loser?: Player;
  // finished: boolean;

  const generateBracket = (match: Match) => {
    // generate bracket based on matchDetails
    return <TournamentBracket match={matchDetails} />;
  };

  useEffect(() => {
    if (data) {
      // generate random players based on playerCount from the players array
      // TODO: implement this logic to a non-predefined array of players
      const randomPlayers = [...players].sort(() => 0.5 - Math.random()).slice(0, data.playerCount);
      setMatchDetails({
        id: 1,
        players: randomPlayers,
        finished: false,
      });
      console.log(matchDetails, 'Match');
    }
  }, [data]);

  return (
    <Box>
      <TournamentForm formDataProps={formData => setData(formData)} />
      {data && generateBracket(matchDetails)}
    </Box>
  );
};

export default TournamentPage;
