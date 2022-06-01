import { IsNotEmpty, IsEmail } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  nom: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  createdOn?: Date;
}
