import ScoreBox from '../../components/ScoreBox';
import '../ScoreboardPage/ScoreboardPage.css';
import BottomNav from '../../components/BottomNav';
import { useState } from 'react';
import ScoreboardWinner from '../../components/ScoreboardWinnerModal';

const ScoreboardPage = () => {
  const [winner, setWinner] = useState(0);
  const [hasWon, setHasWon] = useState(false);
  return (
    <>
      <div>
        <h1 style={{ margin: '0' }}>Scoreboard</h1>
        <div className='tips'>
          <h4>Press once to add</h4>
          <h4>Hold for 2s to remove</h4>
          {/* If winner exists, return true to show modal */}
          {winner !== 0 ? <ScoreboardWinner hasWon={hasWon} playerID={winner} /> : null}
        </div>
      </div>
      <div className='boxContainer'>
        <ScoreBox
          player={1}
          maxScore={10}
          onWinner={winner => {
            setWinner(winner);
            setHasWon(true);
          }}
        />
        <ScoreBox
          player={2}
          maxScore={10}
          onWinner={winner => {
            setWinner(winner);
            setHasWon(true);
          }}
        />
      </div>
      <BottomNav />
    </>
  );
};

export default ScoreboardPage;
