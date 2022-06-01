import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { toUserDto } from 'src/shared/mapper';
import { comparePasswords } from 'src/shared/utils';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async findOne(options?: object): Promise<UserDto> {
    const user = await this.userRepo.findOne(options);
    return toUserDto(user);
  }

  async findByLogin({ email, mdp }: LoginUserDto): Promise<UserDto> {
    const user = await this.userRepo.findOne({ where: { email } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    // compare passwords
    const areEqual = await comparePasswords(user.mdp, mdp);

    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return toUserDto(user);
  }

  async findByPayload({ email }: any): Promise<UserDto> {
    return await this.findOne({ where: { email } });
  }

  async create(userDto: CreateUserDto): Promise<UserDto> {
    const { nom, prenom, email, num_tel, mdp } = userDto;

    // check if the user exists in the db
    const userInDb = await this.userRepo.findOne({ where: { email } });
    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const user: User = await this.userRepo.create({
      nom,
      prenom,
      email,
      num_tel,
      mdp,
    });

    await this.userRepo.save(user);

    return toUserDto(user);
  }

  private _sanitizeUser(user: User) {
    delete user.mdp;
    return user;
  }
}
