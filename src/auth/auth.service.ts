import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<User> {
    return this.userRepository.signUp(authCredentialsDto);
  }
  async signIn(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ token: string }> {
    const username = await this.userRepository.validateUser(authCredentialsDto);
    if (!username) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return { token: await this.jwtService.sign({ username }) };
  }
}
