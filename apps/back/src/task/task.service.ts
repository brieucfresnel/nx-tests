import { Injectable } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from '@nx-tests/resources';

@Injectable()
export class TaskService {
  create(createTaskDto: CreateTaskDto) {
    return 'This action adds a new task';
  }

  findAll() {
    return [
      {
        id: 0,
        content: 'Task One'
      },
      {
        id: 1,
        content: 'Task Two'
      },
      {
        id: 2,
        content: 'Task Three'
      },
    ]
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
