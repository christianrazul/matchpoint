import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import ScoreboardPage from './pages/ScoreboardPage/ScoreboardPage';
import TournamentPage from './pages/TournamentPage';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='scoreboard' element={<ScoreboardPage />} />
        <Route path='tournament' element={<TournamentPage />} />
      </Routes>
    </>
  );
}

export default App;
