import { CategoryListItem } from './../category/category-list-item.model';
export interface Movie {
  id: number;
  title: string;
  imageUrl: string;
  overview: string;
  releaseDate: string;
  originalTitle: string;
  originalLanguage: string;
  popularity: number;
  status: string;
  voteAverage: number;
  spokenLanguages: string[];
  imdbLink?: string;
  genres?: CategoryListItem[];
  runtime: number;
}
