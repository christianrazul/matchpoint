import { players } from './players';
import { Match } from '../components/Scoreboard/Scoreboard';

export const match: Match = {
  id: 24,
  players: players,
  winner: player => console.log(`${player.name} wins!`),
  loser: player => console.log(`${player.name} loses!`),
  finished: false,
};
