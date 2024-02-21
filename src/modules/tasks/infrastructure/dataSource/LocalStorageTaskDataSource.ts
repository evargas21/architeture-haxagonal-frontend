// @scripts
import { Factory } from '../../domain/Factory';
import { Task } from '../../domain/Task';
import { TaskDataSource } from '../../domain/TaskDataSource';

export class LocalStorageTaskDataSource extends TaskDataSource {
  private static instance: LocalStorageTaskDataSource;

  private constructor(taskFactory: Factory) {
    super(taskFactory);
  }

  static getInstance(taskFactory: Factory): LocalStorageTaskDataSource {
    if (!LocalStorageTaskDataSource.instance) {
      LocalStorageTaskDataSource.instance = new LocalStorageTaskDataSource(
        taskFactory
      );
    }
    return LocalStorageTaskDataSource.instance;
  }

  private localStorageToTasks = (): Task[] => {
    const tasksStr = localStorage.getItem('tasks');
    if (tasksStr !== '') {
      const data = JSON.parse(tasksStr || '[]');
      return data.map((task: Task) => this.taskFactory.execute(task));
    }
    return [];
  };

  delete(taskId: string): void {
    let tasks = this.localStorageToTasks();
    tasks = [...tasks].filter((task) => task.getId() !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  async get(): Promise<Task[]> {
    return this.localStorageToTasks();
  }

  async insert(data: Task): Promise<Task> {
    let tasks = this.localStorageToTasks();
    const task = this.taskFactory.execute(data);
    tasks = [...tasks, task];
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return task;
  }

  async update(taskId: string, data: Task): Promise<Task> {
    let tasks: Task[] = this.localStorageToTasks();
    tasks = [...tasks].map((task) => (task.getId() === taskId ? data : task));
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return data;
  }
}
