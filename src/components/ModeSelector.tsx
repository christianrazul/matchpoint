import { EmojiEventsOutlined, ScoreboardOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const ModeSelector = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '2rem' }}>
      <NavLink to='/tournament'>
        <Button variant='contained' size='large' endIcon={<EmojiEventsOutlined />}>
          Tournament Mode
        </Button>
      </NavLink>
      <NavLink to='/scoreboard'>
        <Button variant='contained' size='large' endIcon={<ScoreboardOutlined />}>
          Scoreboard Mode
        </Button>
      </NavLink>
    </div>
  );
};

export default ModeSelector;
