import ScoreBox from '../../components/ScoreBox';
import '../ScoreboardPage/ScoreboardPage.css';
import { useEffect, useState } from 'react';
import ScoreboardWinner from '../../components/ScoreboardWinnerModal/ScoreboardWinnerModal.tsx';

const ScoreboardPage = () => {
  const [winner, setWinner] = useState(0);
  const [hasWon, setHasWon] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (reset === true) {
      setWinner(0);
      setHasWon(false);
      setReset(false);
    }
  }, [reset]);

  return (
    <>
      <div>
        <h1 style={{ margin: '0' }}>Scoreboard</h1>
        <div className='tips'>
          {winner !== 0 ? (
            <ScoreboardWinner hasWon={hasWon} playerID={winner} onResetClick={reset => setReset(reset)} />
          ) : null}
        </div>
      </div>
      <div className='boxContainer'>
        <ScoreBox
          player={1}
          maxScore={5}
          onWinner={winner => {
            setWinner(winner);
            setHasWon(true);
          }}
          reset={reset}
        />
        <ScoreBox
          player={2}
          maxScore={5}
          onWinner={winner => {
            setWinner(winner);
            setHasWon(true);
          }}
          reset={reset}
        />
      </div>
    </>
  );
};

export default ScoreboardPage;

// TODO:
// 1. Add a reset button to reset the scores and make sure it works properly
