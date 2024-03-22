import ScoreBox from '../../components/ScoreBox';
import '../ScoreboardPage/ScoreboardPage.css';
import { useEffect, useState } from 'react';
import ScoreboardWinner from '../../components/ScoreboardWinnerModal/ScoreboardWinnerModal.tsx';

export interface Player {
  playerId: number;
  name: string;
  color: string;
}

const ScoreboardPage = () => {
  const players: Player[] = [
    {
      playerId: 1,
      name: 'Raffy',
      color: '#228BE6',
    },
    {
      playerId: 2,
      name: 'Wico',
      color: '#FA5252',
    },
  ];

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
        <h1 style={{ margin: '0', color: 'black' }}>Scoreboard</h1>
        <div className='tips'>
          {winner !== 0 ? (
            <ScoreboardWinner hasWon={hasWon} playerID={winner} onResetClick={reset => setReset(reset)} />
          ) : null}
        </div>
      </div>
      <div className='boxContainer'>
        <ScoreBox
          player={players[0]}
          maxScore={5}
          onWinner={winner => {
            setWinner(winner);
            setHasWon(true);
          }}
          reset={reset}
        />
        <ScoreBox
          player={players[1]}
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
