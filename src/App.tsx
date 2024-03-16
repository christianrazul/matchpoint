import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import ModeSelector from './components/ModeSelector';
import LandingPage from './pages/LandingPage';
import ScoreboardPage from './pages/ScoreboardPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/scoreboard'>Scoreboard</NavLink>
          </nav>
        </header>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path='/scoreboard' element={<ScoreboardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
