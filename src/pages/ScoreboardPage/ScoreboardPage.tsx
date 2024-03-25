import '../ScoreboardPage/ScoreboardPage.css';
import Scoreboard from '../../components/Scoreboard';
import { players } from '../../common/players';
import { useState } from 'react';
import { initialPlayerState } from '../../components/Scoreboard/Scoreboard';

export interface Player {
  playerId: number;
  name: string;
  color: string;
  score?: number;
}

const maxScore = 3;

const testMatch = {
  players: players,
  maxScore: maxScore,
};

export const ScoreboardPage = () => {
  const [winner, setWinner] = useState(initialPlayerState as Player);

  return (
    <>
      <div>
        <h1 className='title'>Scoreboard</h1>
      </div>
      <Scoreboard
        players={testMatch.players}
        maxScore={testMatch.maxScore}
        winningPlayer={winner => setWinner(winner)}
      />
    </>
  );
};

export default ScoreboardPage;

// TODO:
// 1. Add a reset button to reset the scores and make sure it works properly
