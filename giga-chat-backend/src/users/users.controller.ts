import { Controller, Post, Body, Inject } from '@nestjs/common';
import { UsersService } from '../domain/users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('UsersService') private readonly usersService: UsersService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    console.log(this.usersService);
    return this.usersService.create(createUserDto.name);
  }
}
