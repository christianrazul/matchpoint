import { Box } from '@mui/material';
import './TournamentBracket.css';
import { Match } from '../Scoreboard/Scoreboard';

interface TournamentBracketProps {
  match: Match;
  // winner: Player;
}

const TournamentBracket = ({ match }: TournamentBracketProps) => {
  console.log(match);

  return (
    <>
      <h4 className='tournamentBracketLabel'>Match {match.id}</h4>
      <Box onClick={() => console.log('Bracket clicked')} className='tournamentBracket'>
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
