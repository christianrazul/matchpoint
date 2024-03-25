import '../ScoreboardPage/ScoreboardPage.css';
import Scoreboard from '../../components/Scoreboard';
import { players } from '../../common/players';

export interface Player {
  playerId: number;
  name: string;
  color: string;
  score?: number;
}

const maxScore = 5;

const testMatch = {
  players: players,
  maxScore: maxScore,
};

export const ScoreboardPage = () => {
  return (
    <>
      <div>
        <h1 className='title'>Scoreboard</h1>
      </div>
      <Scoreboard players={testMatch.players} maxScore={testMatch.maxScore} />
    </>
  );
};

export default ScoreboardPage;
