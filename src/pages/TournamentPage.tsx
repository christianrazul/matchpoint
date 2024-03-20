import { useState } from 'react';
import TournamentBtnTest from '../components/TournamentBtnTest';

// Parent
interface TournamentPageProps {
  prop: number;
}

const TournamentPage = ({ prop }: TournamentPageProps) => {
  const [value, setValue] = useState(0);

  return (
    <>
      <h1>{value}</h1>
      <TournamentBtnTest setValue={setValue}></TournamentBtnTest>
    </>
  );
};

export default TournamentPage;
