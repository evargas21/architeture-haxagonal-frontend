// @scripts
import { ITask } from './ITask';
import { Task } from './Task';

export interface ITaskRepository {
  get(): Promise<Task[]>;
  changeStatus(taskId: string, status: boolean): Promise<Task>;
  create(data: ITask): Promise<Task>;
  delete(taskId: string): Promise<void>;
  deleteComplete(): Promise<void>;
}
