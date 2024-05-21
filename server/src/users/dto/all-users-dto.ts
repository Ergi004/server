import { IsString, IsEmail } from 'class-validator';

export class AllUsers {
  id?: number
  @IsString()
  user_name: string;

  @IsString()
  last_name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
