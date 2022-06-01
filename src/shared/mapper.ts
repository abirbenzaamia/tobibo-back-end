import { UserDto } from 'src/user/dto/user.dto';
import { User } from 'src/user/entities/user.entity';

export const toUserDto = (data: User): UserDto => {
  const { id, nom, email } = data;

  const userDto: UserDto = {
    id,
    nom,
    email,
  };

  return userDto;
};
