import { useEffect, useState } from 'react';

interface Props {
  player: number;
  maxScore: number;
  onWinner: (player: number) => void;
}

const ScoreBox = ({ player, maxScore, onWinner }: Props) => {
  const [score, setScore] = useState(0);
  const playerColor = player === 1 ? '#228BE6' : '#FA5252';

  const handleClick = () => {
    setScore(score + 1);
    if (score === maxScore) {
      onWinner(player);
    }
  };

  // useEffect(() => {
  //   if (score === maxScore) {
  //     onWinner(player);
  //   }
  // }, [score]);

  return (
    <button onClick={() => handleClick()} style={{ width: '358px', height: '302px', backgroundColor: playerColor }}>
      PLAYER {player}
      <h1>{score}</h1>
    </button>
  );
};

export default ScoreBox;
