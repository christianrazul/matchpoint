import { Box } from '@mui/material';
import { Player } from '../../pages/ScoreboardPage/ScoreboardPage';
import './TournamentBracket.css';
import { useState } from 'react';
import { Match } from '../Scoreboard/Scoreboard';

interface TournamentBracketProps {
  players: Player[];
  match: Match;
  // winner: Player;
}

const TournamentBracket = ({ players, match }: TournamentBracketProps) => {
  const [initialScore, setInitialScore] = useState(0);

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
