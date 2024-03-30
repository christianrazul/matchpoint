import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import ScoreboardPage from './pages/ScoreboardPage';
import TournamentPage from './pages/TournamentPage';
import { Box } from '@mui/material';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <>
      <Box className='phoneContainer' id='phoneContainer'>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path='scoreboard' element={<ScoreboardPage />} />
          <Route path='tournament' element={<TournamentPage />} />
        </Routes>
        <BottomNav />
      </Box>
    </>
  );
}

export default App;
