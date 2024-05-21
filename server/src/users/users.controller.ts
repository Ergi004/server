import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  HttpException,
  HttpStatus,
  UseGuards,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AllUsers } from './dto/all-users-dto';
import { AuthGuard } from './auth.guard';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    try {
      if (createUserDto.email) {
      }
      const createdUser = this.usersService.register(createUserDto);
      return createdUser;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('login')
  async login(@Body() loginUser: LoginUserDto, @Res() res: Response) {
    console.log(loginUser, "oikkk")
    try {
      const response = await this.usersService.login(loginUser);
      const token = await this.usersService.generateToken(response);
      res.cookie('token', token, { maxAge: 10000000, httpOnly: true });
      return res.status(200).json({ user: response, token: token });
    } catch (error) {
      console.error('Error logging in user:', error);
      res.status(500).json({ message: ' Server Error' });
    }
  }
  @Post('logout')
  logout(@Res() res: Response) {
    res.clearCookie('token');
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() @Body() req) {
    return req.user;
  }
  @Get('getAll')
  async findAll() {
    try {
      const allUsers = await this.usersService.findAll();
      return allUsers;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    try {
      return this.usersService.findOne(+id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Patch('update/:id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    try {
      const updatedUser = this.usersService.update(+id, updateUserDto);
      return { data: updatedUser, message: 'User updated succesfully' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number) {
    try {
      return await this.usersService.remove(+id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
