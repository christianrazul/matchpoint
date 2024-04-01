import { Box } from '@mui/material';
import './TournamentBracket.css';
import { Match } from '../Scoreboard/Scoreboard';

interface TournamentBracketProps {
  match: Match;
  clicked?: (bool: boolean) => void;
}

const TournamentBracket = ({ match, clicked }: TournamentBracketProps) => {
  console.log(match);

  const onClick = () => {
    clicked && clicked(true);
  };

  return (
    <>
      <h4 className='tournamentBracketLabel'>Match {match.id}</h4>
      <Box onClick={onClick} className='tournamentBracket'>
        {match.players.map(player => (
          <Box
            key={player.playerId}
            className={
              player.playerId === match.winner?.playerId ? 'tournamentBracketPlayer winner' : 'tournamentBracketPlayer'
            }
          >
            <Box className='playerName'>{player.name}</Box>
            <Box className='playerScore'>
              {player.playerId === match.winner?.playerId ? match.winner.score : match.loser?.score}
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default TournamentBracket;
