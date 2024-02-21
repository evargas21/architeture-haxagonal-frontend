// @scripts
import { ITask } from './ITask';
import { Task } from './Task';

export class TaskEntityFactory {
  execute = (data: ITask): Task => {
    return new Task(data.createdAt, data.name, data.status, data.id);
  };
}
