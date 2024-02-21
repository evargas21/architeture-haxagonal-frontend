// @packages
import axios, { AxiosInstance } from 'axios';

// @scripts
import { Factory } from '../../domain/Factory';
import { Task } from '../../domain/Task';
import { TaskDataSource } from '../../domain/TaskDataSource';

export class APITaskDataSource extends TaskDataSource {
  private axios: AxiosInstance;
  private static instance: APITaskDataSource;

  private constructor(taskFactory: Factory) {
    super(taskFactory);
    this.axios = axios.create({ baseURL: 'http://localhost:5000/api' });
  }

  static getInstance(taskFactory: Factory) {
    if (!APITaskDataSource.instance) {
      APITaskDataSource.instance = new APITaskDataSource(taskFactory);
    }
    return APITaskDataSource.instance;
  }

  async delete(taskId: string): Promise<void> {
    await this.axios.delete(`/tasks/${taskId}`);
  }

  async get(): Promise<Task[]> {
    const { data } = await this.axios.get<Task[]>('/tasks');
    return [...data].map((task) => this.taskFactory.execute(task));
  }

  async insert(data: Task): Promise<Task> {
    const { data: response } = await this.axios.post('/tasks', data);
    return this.taskFactory.execute(response);
  }

  async update(taskId: string, data: Task): Promise<Task> {
    const { data: response } = await this.axios.put(`/tasks/${taskId}`, data);
    return this.taskFactory.execute(
      [...response].find((task) => task.id === taskId)
    );
  }
}
