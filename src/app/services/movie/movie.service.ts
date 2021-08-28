import { CategoryListItem } from './../../data/models/category/category-list-item.model';
import { MovieList } from './../../data/models/movie/movie-list.model';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Movie } from 'src/app/data/models/movie/movie.model';
const MOVIEDB_API_URL = environment.movieDbApiUrl;
const MOVIEDB_API_KEY = environment.movieDbApiKey;
const MOVIEDB_API_IMAGE_URL = environment.movieDbApiImageUrl;

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  //#region Fields
  private moviesSubject = new Subject<{
    movies: MovieList[];
    totalAmount: number;
  }>();
  private movies: MovieList[] = [];
  //#endregion

  //#region Ctor
  constructor(private httpClient: HttpClient) {}
  //#endregion

  //#region Utils
  private generateUrl(parameter: string): string {
    return `${MOVIEDB_API_URL}/movie/${parameter}?api_key=${MOVIEDB_API_KEY}`;
  }

  private getMovieListByType(type: string, pageIndex = 1, pageSize = 10) {
    const fullUrl = `${this.generateUrl(type)}&page=${pageIndex}`;
    this.httpClient
      .get<{
        page: number;
        results: any[];
        total_pages: number;
        total_results: number;
      }>(fullUrl)
      .pipe(
        map((resData) => {
          return {
            movies: resData.results.map((movie) => {
              const movieItem: MovieList = {
                id: movie.id,
                title: movie.title,
                imageUrl: `${MOVIEDB_API_IMAGE_URL}/${movie.poster_path}`,
                overview: movie.overview,
                releaseDate: new Date(movie.release_date).toDateString(),
              };
              return movieItem;
            }),
            totalAmount: resData.total_results,
          };
        })
      )
      .subscribe((mappedData) => {
        this.movies = mappedData.movies.slice(
          (pageIndex - 1) * pageSize,
          pageIndex * pageSize
        );
        this.moviesSubject.next({
          movies: [...this.movies],
          totalAmount: mappedData.totalAmount,
        });
      });
  }
  //#endregion

  //#region Methods
  getTopRatedMovies(pageIndex = 1, pageSize = 10) {
    this.getMovieListByType('top_rated', pageIndex, pageSize);
  }

  getPopularMovies(pageIndex = 1, pageSize = 10) {
    this.getMovieListByType('popular', pageIndex, pageSize);
  }

  getUpcomingMovies(pageIndex = 1, pageSize = 10) {
    this.getMovieListByType('upcoming', pageIndex, pageSize);
  }

  getNowPlayingMovies(pageIndex = 1, pageSize = 10) {
    this.getMovieListByType('now_playing', pageIndex, pageSize);
  }

  getMoviesSubscription() {
    return this.moviesSubject.asObservable();
  }

  getMovieDetail(movieId: string): Observable<Movie> {
    const fullUrl = `${this.generateUrl(movieId)}`;

    return this.httpClient.get<any>(fullUrl).pipe(
      map((res) => {
        const movieModel: Movie = {
          id: res.id,
          title: res.title,
          imageUrl: `${MOVIEDB_API_IMAGE_URL}/${res.poster_path}`,
          overview: res.overview,
          releaseDate: res.release_date,
          imdbLink: !!res.imdb_id
            ? `https://www.imdb.com/title/${res.imdb_id}`
            : undefined,
          originalLanguage: res.original_language,
          originalTitle: res.original_title,
          popularity: res.popularity,
          runtime: res.runtime,
          spokenLanguages: res.spoken_languages.map((language: any) => {
            return language.english_name;
          }),
          status: res.status,
          voteAverage: res.vote_average,

          genres: res.genres.map((genre: any) => {
            const categoryItem: CategoryListItem = {
              ...genre,
              title: genre.name,
            };
            return categoryItem;
          }),
        };
        return movieModel;
      })
    );
  }

  getCategoryFilteredMovies(categoryId: number, pageIndex: number = 1) {
    //https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate
    const url = `${MOVIEDB_API_URL}/discover/movie?api_key=${MOVIEDB_API_KEY}&sort_by=popularity.desc&page=${pageIndex}&with_watch_monetization_types=flatrate&with_genres=${categoryId}`;
    this.httpClient
      .get<{
        page: number;
        results: any[];
        total_pages: number;
        total_results: number;
      }>(url)
      .pipe(
        map((resData) => {
          return {
            movies: resData.results.map((movie) => {
              const movieItem: MovieList = {
                id: movie.id,
                title: movie.title,
                imageUrl: `${MOVIEDB_API_IMAGE_URL}/${movie.poster_path}`,
                overview: movie.overview,
                releaseDate: new Date(movie.release_date).toDateString(),
              };
              return movieItem;
            }),
            totalAmount: resData.total_results,
          };
        })
      )
      .subscribe((mappedData) => {
        this.movies = mappedData.movies;
        this.moviesSubject.next({
          movies: [...this.movies],
          totalAmount: mappedData.totalAmount,
        });
      });
  }
  //#endregion
}
