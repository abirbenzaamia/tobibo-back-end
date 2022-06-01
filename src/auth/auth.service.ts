import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { RegistrationStatus } from './interfaces/regisration-status.interface';
import { LoginStatus } from './interfaces/login-status.interface';
import { JwtPayload } from './interfaces/payload.interface';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { LoginUserDto } from 'src/user/dto/login-user.dto';
import { UserDto } from 'src/user/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(userDto: CreateUserDto): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
      success: true,
      message: 'user registered',
    };

    try {
      await this.usersService.create(userDto);
    } catch (err) {
      status = {
        success: false,
        message: err,
      };
    }

    return status;
  }

  async login(loginUserDto: LoginUserDto): Promise<LoginStatus> {
    // find user in db
    const user = await this.usersService.findByLogin(loginUserDto);

    // generate and sign token
    const token = this._createToken(user);

    return {
      id: user.id,
      ...token,
    };
  }

  async validateUser(payload: JwtPayload): Promise<UserDto> {
    const user = await this.usersService.findByPayload(payload);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  private _createToken({ email }: UserDto): any {
    const expiresIn = '1000000';

    const user: JwtPayload = { email };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn,
      accessToken,
    };
  }
}
