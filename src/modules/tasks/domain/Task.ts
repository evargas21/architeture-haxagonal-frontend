// @packages
import { v4 as uuidV4 } from 'uuid';

// @scripts
import { ITask } from './ITask';

export class Task {
  private readonly id?: string;
  private name: string;
  private createdAt: Date;
  private readonly status: boolean;

  constructor(createdAt: Date, name: string, status: boolean, id?: string) {
    this.id = id ? id : uuidV4();
    this.name = name;
    this.status = status;
    this.createdAt = createdAt;
  }

  getId(): string {
    return this.id !== undefined ? this.id : '';
  }

  isComplete() {
    return this.id !== null && this.status;
  }

  toITask(): ITask {
    return {
      id: this.id, // Nota: esto podría ser undefined, lo cual es aceptable según la definición de ITask.
      name: this.name,
      createdAt: this.createdAt,
      status: this.status
    };
  }
}
