// @packages
import React, { useContext, useEffect, useState } from 'react';

// @scripts
import { ITask } from './modules/tasks/domain/ITask';
import { ITaskRepository } from './modules/tasks/domain/ITaskRepository';
import TaskUseCase from './modules/tasks/application';

// @styles
import './App.css';

export interface ContextState {
  tasks: ITask[];
  createTask: (task: ITask) => void;
  deleteTask: (tastId: string) => void;
  changeStatusTask: ({ taskId, value }: {  taskId: string; value: boolean }) => Promise<ITask>;
}

export const TasksContext = React.createContext({} as ContextState);

function AppContext({
  children,
  repository
}: React.PropsWithChildren<{ repository: ITaskRepository }>) {
  const [tasks, setTasks] = useState<ITask[]>([]);

  async function getTasks() {
    const taskUseCases = new TaskUseCase(repository);
    const getTasks = await taskUseCases.get();
    setTasks(getTasks);
  }

  async function deleteTask(taskId: string) {
    const taskUseCases = new TaskUseCase(repository);
    taskUseCases.delete(taskId);
    await getTasks();
  }

  async function changeStatusTask({ taskId, value }: {  taskId: string; value: boolean }) {
    const taskUseCases = new TaskUseCase(repository);
    const task = await taskUseCases.changeStatus({taskId, value});
    await getTasks();
    return task;
  }

  async function create(task: ITask) {
    const taskUseCases = new TaskUseCase(repository);
    taskUseCases.create(task);
    await getTasks();
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <TasksContext.Provider value={{ tasks, createTask: create, deleteTask, changeStatusTask }}>
      {children}
    </TasksContext.Provider>
  );
}

export default AppContext;

export const useTasksContext = () => useContext(TasksContext);
