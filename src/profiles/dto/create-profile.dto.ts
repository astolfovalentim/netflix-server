import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl, IsUUID } from 'class-validator';

export class CreateProfileDto {
  @ApiProperty({
    description: 'Title of profile',
    example: 'Batman',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Image URL of profile',

    example:
      'https://kanto.legiaodosherois.com.br/w1200-h628-cfill/wp-content/uploads/2022/01/legiao_qlL0_6a4CKsN.png.jpeg',
  })
  @IsUrl()
  @IsString()
  @IsNotEmpty()
  imageURL: string;

  @ApiProperty({
    description: 'User`s id (UUID) profile`s owner',
    example: '969274ac-e96f-40fa-aef2-4ccfd4719070',
  })
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  userId: string;
}
