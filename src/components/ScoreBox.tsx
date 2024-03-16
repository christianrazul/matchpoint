import { useEffect, useState } from 'react';

interface Props {
  player: number;
  maxScore: number;
}

const ScoreBox = ({ player, maxScore }: Props) => {
  const [score, setScore] = useState(0);
  const playerColor = player === 1 ? '#228BE6' : '#FA5252';

  const handleClick = () => {
    setScore(score + 1);
  };

  useEffect(() => {
    if (score === maxScore) {
      console.log(`Player ${player} wins!`);
    }
  }, [score]);

  return (
    <button onClick={handleClick} style={{ width: '358px', height: '302px', backgroundColor: playerColor }}>
      PLAYER {player}
      <h1>{score}</h1>
    </button>
  );
};

export default ScoreBox;
