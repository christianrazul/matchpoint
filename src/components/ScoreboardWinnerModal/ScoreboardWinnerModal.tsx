import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import { RestartAltOutlined } from '@mui/icons-material';
import { useState } from 'react';
import './ScoreboardWinnerModal.css';
import { Player } from '../../pages/ScoreboardPage/ScoreboardPage';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100%',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

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
      <Box sx={style} bgcolor={winner.color}>
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
