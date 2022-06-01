import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSpecialiteDto {
  @IsString()
  @IsNotEmpty()
  public nom: string;
  @IsString()
  @IsNotEmpty()
  public description: string;
}
