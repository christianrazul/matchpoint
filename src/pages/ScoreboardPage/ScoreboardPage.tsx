import '../ScoreboardPage/ScoreboardPage.css';
import Scoreboard from '../../components/Scoreboard';
import { players } from '../../players';
import { useState } from 'react';
import { initialPlayerState } from '../../components/Scoreboard/Scoreboard';
export interface Player {
  playerId: number;
  name: string;
  color: string;
  score?: number;
}

const maxScore = 3;

export const ScoreboardPage = () => {
  const [winner, setWinner] = useState<Player>(initialPlayerState);
  // const [hasWon, setHasWon] = useState(false);
  // const [resetScores, setResetScores] = useState(false);

  // useEffect(() => {
  //   if (resetScores) {
  //     setWinner(initialPlayerState);
  //     setHasWon(false);
  //     setResetScores(false);
  //   }
  // }, [resetScores]);
  return (
    <>
      <div>
        <h1 className='title'>Scoreboard</h1>
        {/* {winner.playerId !== 0 ? (
          <ScoreboardWinnerModal hasWon={hasWon} winner={winner} resetScores={reset => setResetScores(reset)} />
        ) : null} */}
      </div>
      <Scoreboard players={players} maxScore={maxScore} onWinner={winner => setWinner(winner)} />
      {/* <div className='boxContainer'>
        <ScoreBox
          player={players[0]}
          maxScore={5}
          onWinner={player => {
            setWinner(player);
            setHasWon(true);
          }}
          reset={resetScores}
        />
        <ScoreBox
          player={players[1]}
          maxScore={5}
          onWinner={player => {
            setWinner(player);
            setHasWon(true);
          }}
          reset={resetScores}
        />
      </div> */}
    </>
  );
};

export default ScoreboardPage;

// TODO:
// 1. Add a reset button to reset the scores and make sure it works properly
