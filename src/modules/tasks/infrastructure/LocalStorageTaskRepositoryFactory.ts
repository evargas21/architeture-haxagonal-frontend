// @scripts
import { TaskEntityFactory } from '../domain/TaskEntityFactory';
import { LocalStorageTaskDataSource } from './dataSource/LocalStorageTaskDataSource';
import { TaskRepository } from './TaskRepository';

export class LocalStorageTaskRepositoryFactory {
  static execute() {
    const factory = new TaskEntityFactory();
    const dataSource = LocalStorageTaskDataSource.getInstance(factory);
    return new TaskRepository(dataSource, factory);
  }
}
