// @packages
import { Fragment } from 'react';
import Button from '@mui/material/Button';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';

// @scripts
import { useTasksContext } from '../AppContext';
import CreateTask from '../components/CreateTask';
import Task from '../components/Task';

// @styles
import styles from './styles';

const Todo = () => {
  // const dispatch = useAppDispatch();
  // const tasks: ITask[] = useAppSelector(({ todo }) => todo.tasks);

  // const configText = useConfigText();

  const { tasks, createTask, deleteTask, changeStatusTask } = useTasksContext();

  const onComplete = (taskId: string, value: boolean) => {
    changeStatusTask({taskId, value});
  };

  const onDelete = (taskId: string) => {
    deleteTask(taskId);
  };

  const handleCleanTasks = () => {
    //   dispatch(cleaComplete());
  };

  const handleSubmit = (name: string) => {
    const data = { name, status: false, createdAt: new Date() };
    createTask(data);
  };

  return (
    <>
      <Grid sx={styles.page}>
        <Grid sx={styles.container}>
          <CreateTask onSubmit={handleSubmit} />
          <Grid>
            <Button
              fullWidth
              endIcon={<ClearAllIcon />}
              variant='outlined'
              onClick={handleCleanTasks}
            >
              Clean tasks
            </Button>
          </Grid>
          <Grid
            container
            direction='row'
            justifyContent='center'
            sx={styles.cardContainer}
          >
            <Grid sx={styles.subContainerCard}>
              <Grid item xs={12}>
                <List sx={styles.list}>
                  {!!tasks &&
                    !!tasks &&
                    tasks.map((task, i) => (
                      <Fragment key={task.id}>
                        <Task
                          onComplete={onComplete}
                          task={task}
                          onDelete={onDelete}
                        />
                        {tasks.length - 1 !== i && <Divider />}
                      </Fragment>
                    ))}
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Todo;
