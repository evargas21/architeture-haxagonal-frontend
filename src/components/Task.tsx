// @packages
import { FC } from 'react';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Delete from '@mui/icons-material/Delete';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';

// @scripts
import { ITask } from '../modules/tasks/domain/ITask';

// @styles
import styles from './styles';

interface Props {
  task: ITask;
  onComplete: (taskId: string, value: boolean) => void;
  onDelete: (taskId: string) => void;
}

const Task: FC<Props> = ({ task, onComplete, onDelete }) => {
  const handleComplete = async () => {
    if (task.id != null) await onComplete(task.id, !task.status);
  };

  const handleDelete = async () => {
    if (task.id != null) await onDelete(task.id);
  };

  return (
    <ListItem
      onClick={handleComplete}
      secondaryAction={
        <IconButton
          color='secondary'
          edge='end'
          aria-label='save'
          onClick={handleDelete}
        >
          <Delete />
        </IconButton>
      }
    >
      <ListItemIcon>
        <IconButton>
          {task.status ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankOutlinedIcon />}
        </IconButton>
      </ListItemIcon>
      <ListItemText>
        <Typography
          variant='subtitle1'
          sx={task.status ? styles.isComplete : {}}
        >
          {task.name}
        </Typography>
      </ListItemText>
    </ListItem>
  );
};

export default Task;
