import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGenreDto {
  @ApiProperty({
    description: 'Genre of the movie',
    example: 'Ação',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
