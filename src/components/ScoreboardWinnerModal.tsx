import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, IconButton } from '@mui/material';
import { ResetTvRounded, RestartAltOutlined, UndoOutlined } from '@mui/icons-material';
import { useState } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'green',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  textAlign: 'center',
};

interface Props {
  hasWon: boolean;
  playerID: number;
  onResetClick: (willReset: boolean) => void;
}

export default function BasicModal({ hasWon, playerID, onResetClick }: Props) {
  const [open, setOpen] = useState(hasWon);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Player {playerID} won!
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Good job!
          </Typography>
          <IconButton
            onClick={() => {
              onResetClick(true);
              handleClose();
            }}
            size='large'
            color='inherit'
          >
            <RestartAltOutlined fontSize='inherit' />
          </IconButton>
        </Box>
      </Modal>
    </div>
  );
}
