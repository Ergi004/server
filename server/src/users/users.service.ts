import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  async register(createUser: CreateUserDto): Promise<User> {
    const { password, ...rest } = createUser;
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
    const newUser = this.usersRepository.create({
      password: hashedPassword,
      ...rest,
    });
    return this.usersRepository.save(newUser);
  }

  async generateToken(loginCredentials: LoginUserDto) {
    const payload = { loginCredentials };
    return this.jwtService.signAsync(payload);
  }

  async login(loginCredentials: LoginUserDto) {
    console.log('asfasdasdasd')
    const { email, password } = loginCredentials;
    console.log(loginCredentials)
    const existingUser = await this.usersRepository.findOneBy({ email });

    if (!existingUser) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return existingUser;
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
