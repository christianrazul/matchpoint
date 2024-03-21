import { EmojiEventsOutlined, HomeOutlined, ScoreboardOutlined } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

const BottomNav = () => {
  return (
    <Paper elevation={3} className='bottomNav' style={{ position: 'fixed', bottom: 0 }}>
      <BottomNavigation showLabels>
        <BottomNavigationAction label='Home' icon={<HomeOutlined />} />
        <BottomNavigationAction label='Tournament' icon={<EmojiEventsOutlined />} />
        <BottomNavigationAction label='Scoreboard' icon={<ScoreboardOutlined />} />
        {/* <NavLink to='/'></NavLink>
        <NavLink to='/tournament'></NavLink>
        <NavLink to='/scoreboard'></NavLink> */}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
