// @scripts
import { TaskEntityFactory } from '../domain/TaskEntityFactory';
import { TaskRepository } from './TaskRepository';
import { APITaskDataSource } from './dataSource/APITaskDataSource';

export class APITaskRepositoryFactory {
  static execute() {
    const factory = new TaskEntityFactory();
    const dataSource = APITaskDataSource.getInstance(factory);
    return new TaskRepository(dataSource, factory);
  }
}
