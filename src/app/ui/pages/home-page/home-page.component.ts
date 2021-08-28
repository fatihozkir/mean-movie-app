import { MovieService } from './../../../services/movie/movie.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MovieList } from '../../../data/models/movie/movie-list.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private movieService: MovieService) {}
  isLoading = false;

  movies: MovieList[] = [];
  private moviesSub: Subscription = new Subscription();
  ngOnInit() {
    this.isLoading = true;
    this.movieService.getTopRatedMovies();
    this.moviesSub = this.movieService
      .getMoviesSubscription()
      .subscribe((data) => {
        this.movies = data.movies;
        this.isLoading = false;
      });
  }
  ngOnDestroy() {
    this.moviesSub.unsubscribe();
  }
  // onChangedPage(pageData: PageEvent) {
  //   this.currentPageIndex = pageData.pageIndex + 1;
  //   this.moviesPerPage = pageData.pageSize;
  //   this.movieService.getMovies(this.currentPageIndex);
  // }
  onClick(movieId: any) {
    this.router.navigate(['detail/movie', movieId]);
  }
}
