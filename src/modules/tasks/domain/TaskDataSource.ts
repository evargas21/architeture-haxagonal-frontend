// @scripts
import { Task } from './Task';
import { Factory } from './Factory';

export abstract class TaskDataSource {
  protected taskFactory: Factory;

  constructor(taskFactory: Factory) {
    this.taskFactory = taskFactory;
  }

  abstract insert(data: Task): Promise<Task>;

  abstract delete(taskId: string): void;

  abstract update(taskId: string, data: any): Promise<Task>;

  abstract get(): Promise<Task[]>;
}
