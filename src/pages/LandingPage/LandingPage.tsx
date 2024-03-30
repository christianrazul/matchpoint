import BottomNav from '../../components/BottomNav';
import Scoreboard from '../../components/Scoreboard';
import { testMatch } from '../ScoreboardPage/ScoreboardPage';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div>
      <h1 className='title'>Match Point</h1>
      <Scoreboard players={testMatch.players} maxScore={testMatch.maxScore} />

      <BottomNav />
    </div>
  );
};

export default LandingPage;
