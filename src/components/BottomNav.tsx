import { EmojiEventsOutlined, HomeOutlined, ScoreboardOutlined } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation>
        <NavLink to='/'>
          <BottomNavigationAction label='Home' icon={<HomeOutlined />} />
        </NavLink>
        <NavLink to='/tournament'>
          <BottomNavigationAction label='Tournament' icon={<EmojiEventsOutlined />} />
        </NavLink>
        <NavLink to='/scoreboard'>
          <BottomNavigationAction label='Scoreboard' icon={<ScoreboardOutlined />} />
        </NavLink>
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
