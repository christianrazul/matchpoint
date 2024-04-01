import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import Scoreboard, { Match, initialMatchState } from '../components/Scoreboard/Scoreboard';
import TournamentForm, { FormValues } from '../components/TournamentForm';
import { players } from '../common/players';
import TournamentBracket from '../components/TournamentBracket';

const TournamentPage = () => {
  const [matchDetails, setMatchDetails] = useState<Match>(initialMatchState);
  const [bracketGenerated, setBracketGenerated] = useState<boolean>(false);
  const [bracketClicked, setBracketClicked] = useState<boolean>(false);

  const [data, setData] = useState<FormValues>();

  const generateBracket = (match: Match) => {
    // generate bracket based on matchDetails
    return <TournamentBracket match={matchDetails} clicked={status => setBracketClicked(status)} />;
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
      console.log('Match Generated');
      console.log(matchDetails);
      setBracketGenerated(true);
    }
  }, [data]);

  return (
    <Box>
      {!bracketGenerated && <TournamentForm formDataProps={formData => setData(formData)} />}
      {data && generateBracket(matchDetails)}
      {bracketClicked && <Scoreboard players={matchDetails.players} maxScore={3} />}
    </Box>
  );
};

export default TournamentPage;
