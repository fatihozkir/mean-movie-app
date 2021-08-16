import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

export interface Movie {
  id: number;
  title: string;
  imageUrl: string;
}

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.scss'],
})
export class MovieDetailPageComponent implements OnInit {
  url = 'https://api.themoviedb.org/3';
  API_KEY = 'c36b41b2997ec896def26ccb538afdef';
  
  constructor(private httpClient: HttpClient) {}
  movie: Movie | undefined;
  ngOnInit() {
    const rndNumber = Math.floor(Math.random() * (1000 - 1) + 1).toString();
    const fullUrl =
    `https://api.themoviedb.org/3/movie/${rndNumber}?api_key=c36b41b2997ec896def26ccb538afdef&language=en-US`;
    this.httpClient
      .get<any>(fullUrl)
      .pipe(
        map((res) => {
          console.log(res.id);
          const movieModel: Movie = {
            id: res.id,
            title: res.title,
            imageUrl:
              'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' +
              res.poster_path,
          };
          return movieModel;
        })
      )
      .subscribe((mappedData) => {
        this.movie = mappedData;
      });
  }
}
