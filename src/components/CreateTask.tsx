// @packages
import React, { FC, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

// @scripts
// import { useConfigText } from '../hooks/useConfigText';

// @styles
import styles from './styles';

interface Props {
  onSubmit: (name: string) => void;
}

const CreateTask: FC<Props> = ({ onSubmit }) => {
  const [task, setTask] = useState<string>('');

  // const configText = useConfigText();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTask(event.target.value);

  const handleSubmit = async () => {
    if (!task) return;
    await onSubmit(task);
    setTask('');
  };

  return (
    <Grid sx={styles.container}>
      <TextField
        sx={styles.input}
        value={task}
        placeholder='Description task'
        onChange={handleChange}
        required
      />
      <Button variant='outlined' onClick={handleSubmit}>
        Create task
      </Button>
    </Grid>
  );
};

export default CreateTask;
