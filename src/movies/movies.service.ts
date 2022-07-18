import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateMovieDto) {
    return await this.prisma.movie.create({
      data: dto,
      select: {
        title: true,
        coverImageURL: true,
        description: true,
        year: true,
      },
    });
  }

  async findAll() {
    return await this.prisma.movie.findMany({
      select: {
        id: true,
        title: true,
        coverImageURL: true,
        description: true,
        year: true,
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.movie.findUnique({
      where: { id },
      // genres: {
      //   select: {
      //     name: true,
      //   },
      // },
    });
  }

  async update(id: string, dto: UpdateMovieDto) {
    const data: Partial<Movie> = { ...dto };
    return this.prisma.movie.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    await this.prisma.movie.delete({ where: { id } });
    return { message: 'Movie successfully deleted' };
  }
}
