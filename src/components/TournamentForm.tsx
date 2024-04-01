import { TextField, Button, Stack, InputLabel, Select, MenuItem, SelectChangeEvent, FormControl } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import '../App.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { z } from 'zod';

const schema = z.object({
  playerCount: z.number().min(2),
  maxScore: z.number().min(1),
  tournamentType: z.string(),
});

export type FormValues = z.infer<typeof schema>;

interface TournamentFormProps {
  formDataProps: (data: FormValues) => void;
}

const TournamentForm = ({ formDataProps }: TournamentFormProps) => {
  const [tournamentType, setTournamentType] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    defaultValues: {
      playerCount: 2,
      maxScore: 1,
      tournamentType: 'tm-single-elim',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = data => {
    formDataProps(data);
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
            {...register('playerCount')}
            error={!!errors.playerCount}
            helperText={errors.playerCount?.message}
          />
          <TextField
            id='standard-basic'
            label='Goal Score'
            variant='outlined'
            type='number'
            fullWidth
            required
            {...register('maxScore')}
            error={!!errors.maxScore}
            helperText={errors.maxScore?.message}
          />
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Tournament Mode</InputLabel>
            <Select
              id='tournament-type-select'
              value={tournamentType}
              label='Tournament Type'
              type='select'
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
