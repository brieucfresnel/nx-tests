import {TaskDto} from "./task.resource";

export const usersResourcePath = '/users';
export const authResourcePath = '/auth';

export interface UserDto {
  id: number,
  email: string,
  password: string,
}

export interface UserDto {
  id: number,
  email: string,
  password: string,
}

export interface CreateUserDto {
  email: string,
  password: string,
}

export interface LoginUserDto {
  email: string,
  password: string,
}

export interface RegisterUserDto {
  email: string,
  password: string,
}
