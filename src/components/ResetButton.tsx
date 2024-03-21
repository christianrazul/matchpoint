import { Button } from '@mui/material';

interface ResetButtonProps {
  onReset: () => void;
}

const ResetButton = ({ onReset }: ResetButtonProps) => {
  return <Button onClick={onReset}>Reset Scores</Button>;
};

export default ResetButton;
