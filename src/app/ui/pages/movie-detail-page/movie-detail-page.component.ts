import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MovieService } from './../../../services/movie/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/data/models/movie/movie.model';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.scss'],
})
export class MovieDetailPageComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}

  movieId: string | null = null;
  isLoading: boolean = false;
  movie: Movie | undefined;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.isLoading = true;
        const movieId = paramMap.get('id');
        if (movieId) {
          this.movieId = movieId;
          this.movieService.getMovieDetail(this.movieId).subscribe((data) => {
            this.isLoading = false;
            this.movie = data;
          });
        }
      }
    });
  }
}
