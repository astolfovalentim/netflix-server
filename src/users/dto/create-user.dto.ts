import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Name`s user',
    example: 'Bruce Wayne',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'User`s email',
    example: 'bruce@wayne.com',
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User`s password',
    example: '@As123456',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'User`s CPF number',
    example: '123.123.123-12',
  })
  @Length(13, 14)
  @IsString()
  @IsNotEmpty()
  CPF: string;

  @ApiProperty({
    description: 'If user is admin of server',
    example: true,
  })
  @IsBoolean()
  isAdmin?: boolean;
}
