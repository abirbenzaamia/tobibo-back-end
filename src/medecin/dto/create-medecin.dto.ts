import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Specialite } from 'src/specialite/entities/specialite.entity';

export class CreateMedecinDto {
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
  public specialite: Specialite;
}
