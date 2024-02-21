// @scripts
import { ITask } from '../domain/ITask';
import { ITaskRepository } from '../domain/ITaskRepository';

export default class TaskUseCase {
  private repository: ITaskRepository;

  constructor(repository: ITaskRepository) {
    this.repository = repository;
  }

  async get(): Promise<ITask[]> {
    const list = await this.repository.get();
    return [...list].map((task) => task.toITask());
  }

  async create(data: ITask): Promise<ITask> {
    const task = await this.repository.create(data);
    return task.toITask();
  }

  async delete(taskId: string): Promise<void> {
    await this.repository.delete(taskId);
  }

  async changeStatus({
    taskId,
    value
  }: {
    taskId: string;
    value: boolean;
  }): Promise<ITask> {
    const task = await this.repository.changeStatus(taskId, value);
    return task.toITask();
  }
}
