import { CategoryPageComponent } from './ui/pages/category-page/category-page.component';
import { MainLayoutComponent } from './ui/layouts/main-layout/main-layout.component';
import { HomePageComponent } from './ui/pages/home-page/home-page.component';
import { MoviePageComponent } from './ui/pages/movie-page/movie-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
        path: 'movie',
        children: [
          {
            path: ':id',
            component: MoviePageComponent,
          },
        ],
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
