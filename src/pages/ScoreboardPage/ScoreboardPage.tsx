import '../ScoreboardPage/ScoreboardPage.css';
import Scoreboard from '../../components/Scoreboard';
import { players } from '../../common/players';
export interface Player {
  playerId: number;
  name: string;
  color: string;
  score?: number;
}

const maxScore = 3;

export const ScoreboardPage = () => {
  return (
    <>
      <div>
        <h1 className='title'>Scoreboard</h1>
      </div>
      <Scoreboard players={players} maxScore={maxScore} />
    </>
  );
};

export default ScoreboardPage;

// TODO:
// 1. Add a reset button to reset the scores and make sure it works properly
