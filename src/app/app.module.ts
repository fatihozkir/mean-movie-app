import { MovieDetailPageModule } from './ui/pages/movie-detail-page/movie-detail-page.module';
import { MoviePageModule } from './ui/pages/movie-page/movie-page.module';
import { CategoryPageModule } from './ui/pages/category-page/category-page.module';
import { CategoryDetailPageModule } from './ui/pages/category-detail-page/category-detail-page.module';
import { LayoutModule } from './core/modules/layout.module';
import { HomePageModule } from './ui/pages/home-page/home-page.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/modules/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule,
    HomePageModule,
    CategoryDetailPageModule,
    CategoryPageModule,
    MoviePageModule,
    MovieDetailPageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
