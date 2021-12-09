import {Entity, Column, OneToMany, ObjectIdColumn, BeforeInsert} from 'typeorm';
import {Task} from "../task/task.entity";
import { hashSync, genSaltSync } from 'bcrypt';

@Entity()
export class User {
  @ObjectIdColumn()
  id: number;

  @Column({
    type: 'string',
    unique: true
  })
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: 'date'
  })
  createdAt: any;

  @Column({
    type: 'date'
  })
  updatedAt: any;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(type => Task, task => task.user)
  users: User[];
}
