import { TextField } from '@mui/material';

const TournamentForm = () => {
  return (
    <form noValidate autoComplete='off'>
      <TextField id='standard-basic' label='Player Count' variant='outlined' fullWidth required />
    </form>
  );
};

export default TournamentForm;
