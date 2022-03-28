import {
  Controller,
  Get,
  Post,
  Body,
  UseInterceptors,
  CacheInterceptor,
  Param,
} from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import * as Console from 'console';

@Controller('profiles')
@UseInterceptors(CacheInterceptor)
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profilesService.create(createProfileDto);
  }

  @Get('gender')
  findAll(@Param() params) {
    console.log(params);
    Console.log('Getting profiles from controller');
    return this.profilesService.findByGender(params.gender);
  }
}
