import { RegisterPageComponent } from './ui/pages/auth/register-page/register-page.component';
import { LoginPageComponent } from './ui/pages/auth/login-page/login-page.component';
import { MovieDetailPageComponent } from './ui/pages/movie-detail-page/movie-detail-page.component';
import { DetailLayoutComponent } from './ui/layouts/detail-layout/detail-layout.component';
import { CategoryDetailPageComponent } from './ui/pages/category-detail-page/category-detail-page.component';
import { CategoryPageComponent } from './ui/pages/category-page/category-page.component';
import { MainLayoutComponent } from './ui/layouts/main-layout/main-layout.component';
import { HomePageComponent } from './ui/pages/home-page/home-page.component';
import { MoviePageComponent } from './ui/pages/movie-page/movie-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListingPageComponent } from './ui/pages/movie-listing-page/movie-listing-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'category',
        children: [
          {
            path: 'all',
            component: CategoryPageComponent,
          },
          {
            path: ':id',
            component: CategoryPageComponent,
          },
        ],
      },
      {
        path: 'auth',
        children: [
          {
            path: 'login',
            component: LoginPageComponent,
          },
          {
            path: 'register',
            component: RegisterPageComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'detail',
    component: DetailLayoutComponent,
    children: [
      {
        path: 'movie',
        children: [
          {
            path: ':id',
            component: MovieDetailPageComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'movie',
    component: DetailLayoutComponent,
    children: [
      {
        path: 'listing/:type',
        component: MovieListingPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
