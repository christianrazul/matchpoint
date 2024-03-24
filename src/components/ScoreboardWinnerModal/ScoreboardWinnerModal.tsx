import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import { RestartAltOutlined } from '@mui/icons-material';
import { useState } from 'react';
import './ScoreboardWinnerModal.css';
import { Player } from '../../pages/ScoreboardPage/ScoreboardPage';
import './ScoreboardWinnerModal.css';

interface Props {
  hasWon: boolean;
  winner: Player;
  resetScores: (reset: boolean) => void;
}

export default function BasicModal({ hasWon, winner, resetScores }: Props) {
  const [open, setOpen] = useState(hasWon);
  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
      <Box className='winnerModalContainer' bgcolor={winner.color}>
        <Typography id='modal-modal-title' variant='h2'>
          {winner.name} won!
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          Nice chamba
        </Typography>
        <IconButton
          onClick={() => {
            resetScores(true);
            handleClose();
          }}
          size='large'
          color='inherit'
        >
          <RestartAltOutlined fontSize='inherit' />
        </IconButton>
      </Box>
    </Modal>
  );
}
