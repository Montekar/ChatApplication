import { ApiProperty } from '@nestjs/swagger';

export class CreateProfileDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  age: number;
}
