import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MovieList } from '../../../data/models/movie/movie-list.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router) {}
  showButton: boolean = true;
  // MatPaginator Inputs
  totalAmount = 0;
  currentPageIndex = 1;
  postsPerPage = 1;
  pageSizeOptions: number[] = [1, 2, 5, 10];
  generateRandom(): string {
    return Math.floor(Math.random() * (1000 - 1) + 1).toString();
  }
  movies: MovieList[] = [
    {
      id: this.generateRandom(),
      createdDate: new Date(),
      description: 'Desc',
      title: 'Title1',
      imageUrl: 'https://placeimg.com/500/250/tech',
    },
    {
      id: this.generateRandom(),
      createdDate: new Date(),
      description: 'Desc',
      title: 'Title1',
      imageUrl: 'https://placeimg.com/500/250/nature',
    },
    {
      id: this.generateRandom(),
      createdDate: new Date(),
      description: 'Desc',
      title: 'Title1',
      imageUrl: 'https://placeimg.com/500/250/arch',
    },
    {
      id: this.generateRandom(),
      createdDate: new Date(),
      description: 'Desc',
      title: 'Title1',
      imageUrl: 'https://placeimg.com/500/250/people',
    },
  ];

  ngOnInit() {
    this.totalAmount = this.movies.length;
  }
  onChangedPage(pageData: PageEvent) {
    this.currentPageIndex = pageData.pageIndex + 1;
    this.postsPerPage = pageData.pageSize;
  }
  onClick(movieId: string) {
    this.router.navigate(['detail/movie', movieId]);
  }
}
