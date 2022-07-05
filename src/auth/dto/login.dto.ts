import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: 'User`s email address',
    example: 'bruce@wayne.com',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'User`s password for authentication',
    example: '@Abc123456',
  })
  password: string;
}