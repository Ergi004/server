import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Users' })
export class User {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

  @Column()
  user_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;
  
  @Column()
  password: string;
  @Column({default: 'SimpleUser'})
  role?: string
}