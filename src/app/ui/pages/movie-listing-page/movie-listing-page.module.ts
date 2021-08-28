import { NgModule } from '@angular/core';
import { MovieListingPageComponent } from './movie-listing-page.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CoreModule } from 'src/app/core/modules/core.module';

@NgModule({
  imports: [CoreModule, MatPaginatorModule],
  declarations: [MovieListingPageComponent],
})
export class MovieListingPageModule {}
