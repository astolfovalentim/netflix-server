export class Movie {
  id?: string;
  title: string;
  coverImageURL: string;
  description: string;
  year: number;
  imdbScore: number;
  trailerYouTubeUrl: string;

  createdAt?: Date;
  updatedAt?: Date;
}
