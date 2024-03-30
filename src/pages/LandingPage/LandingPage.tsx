import { Button } from '@mui/material';
import BottomNav from '../../components/BottomNav';
import Scoreboard from '../../components/Scoreboard';
import { testMatch } from '../ScoreboardPage/ScoreboardPage';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <>
      <h1 className='title'>Match Point</h1>

      <Scoreboard players={testMatch.players} maxScore={testMatch.maxScore} />
      <Button variant='outlined' color='primary' href='/tournament' className='tournament-button'>
        Tournament Mode
      </Button>
      <BottomNav />
    </>
  );
};

export default LandingPage;
