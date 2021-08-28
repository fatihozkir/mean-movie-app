import { LoginPageModule } from './../../ui/pages/auth/login-page/login-page.module';
import { CategoryDetailPageModule } from '../../ui/pages/category-detail-page/category-detail-page.module';
import { CategoryPageModule } from '../../ui/pages/category-page/category-page.module';
import { HomePageModule } from '../../ui/pages/home-page/home-page.module';
import { MovieDetailPageModule } from '../../ui/pages/movie-detail-page/movie-detail-page.module';
import { MoviePageModule } from '../../ui/pages/movie-page/movie-page.module';
import { NgModule } from '@angular/core';
import { RegisterPageModule } from 'src/app/ui/pages/auth/register-page/register-page.module';

@NgModule({
  exports: [
    MoviePageModule,
    MovieDetailPageModule,
    HomePageModule,

    CategoryDetailPageModule,
    LoginPageModule,
    RegisterPageModule,
  ],
})
export class PageModule {}
