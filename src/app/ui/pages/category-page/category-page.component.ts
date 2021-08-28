import { CategoryService } from './../../../services/category/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Subscription } from 'rxjs';
import { MovieList } from 'src/app/data/models/movie/movie-list.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit, OnDestroy {
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private categoryService: CategoryService,
    private router: Router
  ) {}
  private moviesSub: Subscription = new Subscription();
  pageSize = 20;
  isLoading = false;
  movies: MovieList[] = [];
  totalAmount: number = 0;
  currentPageIndex = 1;
  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      const id = param['id'];
      this.isLoading = true;
      if (id) {
        this.movieService.getCategoryFilteredMovies(id, 1);
        this.moviesSub = this.movieService
          .getMoviesSubscription()
          .subscribe((data) => {
            this.totalAmount = data.totalAmount;
            this.movies = data.movies;
            this.isLoading = false;
          });
      } else {
        this.router.navigate(['/']);
      }
    });
  }
  onClick(movieId: any) {
    this.router.navigate(['detail/movie', movieId]);
  }
  onChangedPage(pageData: PageEvent) {
    this.currentPageIndex = pageData.pageIndex + 1;
    this.movieService.getCategoryFilteredMovies(35, this.currentPageIndex);
  }
  ngOnDestroy() {
    this.moviesSub.unsubscribe();
  }
}
