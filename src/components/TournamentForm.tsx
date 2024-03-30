import { TextField, Button, Stack, InputLabel, Select, MenuItem, SelectChangeEvent, FormControl } from '@mui/material';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import '../App.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

type FormValues = {
  playerCount: number;
  maxScore: number;
  tournamentType: string;
};

const TournamentForm = () => {
  const [tournamentType, setTournamentType] = useState('');

  const form = useForm<FormValues>({
    defaultValues: {
      playerCount: 2,
      maxScore: 1,
      tournamentType: 'tm-single-elim',
    },
  });

  const { register, handleSubmit, formState, control } = form;

  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setTournamentType(event.target.value as string);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete='off'>
        <Stack spacing={2} width={400}>
          <TextField
            id='standard-basic'
            label='Player Count'
            variant='outlined'
            type='number'
            fullWidth
            required
            {...register('playerCount', {
              required: 'Player count is required',
            })}
            error={!!errors.playerCount}
            helperText={errors.playerCount?.message}
          />
          <TextField
            id='standard-basic'
            label='Goal Score'
            variant='outlined'
            fullWidth
            required
            {...register('maxScore', {
              required: 'Max Score is required',
            })}
            error={!!errors.maxScore}
            helperText={errors.maxScore?.message}
          />
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Tournament Mode</InputLabel>
            <Select
              id='tournament-type-select'
              value={tournamentType}
              label='Tournament Type'
              {...register('tournamentType', {
                required: 'Tournament Type is required',
              })}
              onChange={handleChange}
              style={{ textAlign: 'left' }}
            >
              <MenuItem value={'tm-single-elim'}>Single Elimination</MenuItem>
              <MenuItem value={'tm-double-elim'}>Double Elimination</MenuItem>
            </Select>
          </FormControl>
          <Stack direction={'row'} spacing={2}>
            <NavLink to='/' style={{ width: '100%' }}>
              <Button type='button' variant='outlined' fullWidth>
                Back
              </Button>
            </NavLink>

            <Button type='submit' variant='contained' fullWidth>
              Submit
            </Button>
          </Stack>
        </Stack>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default TournamentForm;
