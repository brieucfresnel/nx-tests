export const taskResourcePath = '/task';

export interface TaskDto {
  id?: number;
  content: string;
}

export interface CreateTaskDto {
  content: string;
}

export interface UpdateTaskDto {
  content: string;
}

