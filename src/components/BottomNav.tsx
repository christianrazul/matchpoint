import { Code, HomeOutlined, SettingsOutlined } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';

const BottomNav = () => {
  return (
    <Paper elevation={3} className='bottomNav'>
      <BottomNavigation showLabels>
        <BottomNavigationAction label='Home' icon={<HomeOutlined />} />
        <BottomNavigationAction label='Changelogs' icon={<Code />} />
        <BottomNavigationAction label='Settings' icon={<SettingsOutlined />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
