import ScoreBox from '../../components/ScoreBox';
import '../ScoreboardPage/ScoreboardPage.css';
import { useEffect, useState } from 'react';
import ScoreboardWinnerModal from '../../components/ScoreboardWinnerModal';
import { players } from '../../players';

export interface Player {
  playerId: number;
  name: string;
  color: string;
  score?: number;
}

export const initialPlayerState: Player = {
  playerId: 0,
  name: '',
  color: '',
  score: 0,
};

export const ScoreboardPage = () => {
  const [winner, setWinner] = useState<Player>(initialPlayerState);
  const [hasWon, setHasWon] = useState(false);
  const [resetScores, setResetScores] = useState(false);

  useEffect(() => {
    if (resetScores) {
      setWinner(initialPlayerState);
      setHasWon(false);
      setResetScores(false);
    }
  }, [resetScores]);
  return (
    <>
      <div>
        <h1 className='title'>Scoreboard</h1>
        <div>
          {winner.playerId !== 0 ? (
            <ScoreboardWinnerModal hasWon={hasWon} winner={winner} resetScores={reset => setResetScores(reset)} />
          ) : null}
        </div>
      </div>
      <div className='boxContainer'>
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
      </div>
    </>
  );
};

export default ScoreboardPage;

// TODO:
// 1. Add a reset button to reset the scores and make sure it works properly
