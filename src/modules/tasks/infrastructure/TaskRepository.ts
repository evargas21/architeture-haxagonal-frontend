// @scripts
import { Factory } from '../domain/Factory';
import { ITask } from '../domain/ITask';
import { ITaskRepository } from '../domain/ITaskRepository';
import { Task } from '../domain/Task';
import { TaskDataSource } from '../domain/TaskDataSource';

export class TaskRepository implements ITaskRepository {
  private dataSource: TaskDataSource;
  private factory: Factory;

  constructor(dataSource: TaskDataSource, factory: Factory) {
    this.dataSource = dataSource;
    this.factory = factory;
  }

  async changeStatus(taskId: string, status: boolean): Promise<Task> {
    const list = await this.get();
    const taskFound = list.find((task) => task.getId() === taskId);
    const updated = await this.dataSource.update(taskId, {
      ...taskFound,
      status
    });
    return this.factory.execute(updated);
  }

  async create(data: ITask): Promise<Task> {
    const task = this.factory.execute(data);
    return await this.dataSource.insert(task);
  }

  async delete(taskId: string): Promise<void> {
    await this.dataSource.delete(taskId);
  }

  async deleteComplete(): Promise<void> {
    const tasks = await this.get();
    for await (const task of tasks) {
      if (task.isComplete()) {
        await this.delete(task.getId());
      }
    }
  }

  async get(): Promise<Task[]> {
    return await this.dataSource.get();
  }
}
