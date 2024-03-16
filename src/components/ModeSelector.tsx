import { Delete, EmojiEvents, EmojiEventsOutlined, Group, ScoreboardOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';

const ModeSelector = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '2rem' }}>
      <Button variant='contained' size='large' endIcon={<EmojiEventsOutlined />}>
        Tournament Mode
      </Button>
      <Button variant='contained' size='large' endIcon={<ScoreboardOutlined />}>
        Scoreboard Mode
      </Button>
    </div>
  );
};

export default ModeSelector;
