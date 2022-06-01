import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  public nom: string;
  @IsString()
  @IsNotEmpty()
  public prenom: string;
  @IsEmail()
  public email: string;
  @IsString()
  @IsNotEmpty()
  public num_tel: string;
  @IsString()
  @IsNotEmpty()
  public mdp: string;
}
