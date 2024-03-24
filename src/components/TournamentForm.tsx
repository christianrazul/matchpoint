import { TextField } from '@mui/material';
import '../App.css';

const TournamentForm = () => {
  return (
    <form noValidate autoComplete='off'>
      <TextField id='standard-basic' label='Player Count' variant='outlined' fullWidth required />
      <div className='test2'></div>
    </form>
  );
};

export default TournamentForm;
