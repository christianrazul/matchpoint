import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import ScoreboardPage from './pages/ScoreboardPage';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='scoreboard' element={<ScoreboardPage />} />
      </Routes>
    </>
  );
}

export default App;
