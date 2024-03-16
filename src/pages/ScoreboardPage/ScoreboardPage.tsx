import { NavLink } from 'react-router-dom';
import ScoreBox from '../../components/ScoreBox';
import '../ScoreboardPage/ScoreboardPage.css';
import { Button } from '@mui/material';
import { Home } from '@mui/icons-material';
import BottomNav from '../../components/BottomNav';

const ScoreboardPage = () => {
  return (
    <>
      <div>
        <h1 style={{ margin: '0' }}>Scoreboard</h1>
        <div className='tips'>
          <h4>Press once to add</h4>
          <h4>Hold for 2s to remove</h4>
        </div>
      </div>
      <div className='boxContainer'>
        <ScoreBox player={1} maxScore={11} />
        <ScoreBox player={2} maxScore={11} />
      </div>
      <BottomNav />
    </>
  );
};

export default ScoreboardPage;
