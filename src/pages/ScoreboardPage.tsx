import ScoreBox from '../components/ScoreBox';

const ScoreboardPage = () => {
  return (
    <>
      <div>
        <h1 style={{ margin: '0' }}>Scoreboard</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            padding: '1rem',
          }}
        >
          <h4 style={{ margin: '0' }}>Press once to add</h4>
          <h4 style={{ margin: '0' }}>Hold for 2s to remove</h4>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <ScoreBox player={1} />
        <ScoreBox player={2} />
      </div>
    </>
  );
};

export default ScoreboardPage;
