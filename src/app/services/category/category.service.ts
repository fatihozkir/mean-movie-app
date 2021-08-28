import { CategoryListItem } from './../../data/models/category/category-list-item.model';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

const MOVIEDB_API_URL = environment.movieDbApiUrl;
const MOVIEDB_API_KEY = environment.movieDbApiKey;
const movieDbFullUrl = `${MOVIEDB_API_URL}/genre/movie/list?api_key=${MOVIEDB_API_KEY}`;
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  private categories: CategoryListItem[] = [];
  private categoryUpdatedSubject = new Subject<{
    categories: CategoryListItem[];
    totalAmount: number;
  }>();

  //https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US
  private getCategoryList(pagerActive = false, pageIndex = 1, pageSize = 5) {
    this.httpClient
      .get<{ genres: any[] }>(movieDbFullUrl)
      .pipe(
        map((resData) => {
          return {
            categories: resData.genres.map((genre) => {
              const categoryItem: CategoryListItem = {
                ...genre,
                title: genre.name,
              };
              return categoryItem;
            }),
            totalAmount: resData.genres.length,
          };
        })
      )
      .subscribe((mappedData) => {
        if (!pagerActive) {
          this.categories = mappedData.categories.slice(
            (pageIndex - 1) * pageSize,
            pageIndex * pageSize
          );
        } else {
          this.categories = mappedData.categories;
        }

        this.categoryUpdatedSubject.next({
          categories: [...this.categories],
          totalAmount: mappedData.totalAmount,
        });
      });
  }
  getSidebarCategories(pageIndex = 1, pageSize = 5) {
    this.getCategoryList(false, pageIndex, pageSize);
  }

  getCategories(pageIndex = 1, pageSize = 5) {
    this.getCategoryList(true, pageIndex, pageSize);
  }


  getCategoryUpdateListener() {
    return this.categoryUpdatedSubject.asObservable();
  }
}
