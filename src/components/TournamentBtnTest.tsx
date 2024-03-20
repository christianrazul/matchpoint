import { Button } from '@mui/material';
import { useState } from 'react';

interface Props {
  setValue: (value: number) => void;
}

const TournamentBtnTest = ({ setValue }: Props) => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <Button variant='contained' size='large' onClick={() => setValue(number)}>
        Test
      </Button>
      <Button variant='contained' size='large' onClick={() => setNumber(number + 1)}>
        Counter
      </Button>
    </>
  );
};

export default TournamentBtnTest;
