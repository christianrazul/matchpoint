import { Box, Stack } from '@mui/material';
import ScoreBox from '../ScoreBox';
import { players } from '../../players';

const Scoreboard = () => {
  return (
    <Box>
      <Stack>
        <ScoreBox
          player={players[0]}
          maxScore={5}
          onWinner={player => {
            setWinner(player);
            setHasWon(true);
          }}
          reset={reset}
        />
        <ScoreBox
          player={players[1]}
          maxScore={5}
          onWinner={player => {
            setWinner(player);
            setHasWon(true);
          }}
          reset={reset}
        />
      </Stack>
    </Box>
  );
};

export default Scoreboard;
