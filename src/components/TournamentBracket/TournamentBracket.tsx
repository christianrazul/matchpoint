import { Box } from '@mui/material';
import { Player } from '../../pages/ScoreboardPage/ScoreboardPage';
import './TournamentBracket.css';
import { useState } from 'react';

interface TournamentBracketProps {
  players: Player[];
  matchId: number;
  winner: Player;
}

const TournamentBracket = ({ players, matchId, winner }: TournamentBracketProps) => {
  const [initialScore, setInitialScore] = useState(0);

  return (
    <>
      <h4 className='tournamentBracketLabel'>Match {matchId}</h4>
      <Box onClick={() => console.log('Bracket clicked')} className='tournamentBracket'>
        {players.map(player => (
          <Box
            key={player.playerId}
            className={
              player.playerId === winner.playerId ? 'tournamentBracketPlayer winner' : 'tournamentBracketPlayer'
            }
          >
            <Box className='playerName'>{player.name}</Box>
            <Box className='playerScore'>{player.score !== undefined ? winner.score : initialScore}</Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default TournamentBracket;
