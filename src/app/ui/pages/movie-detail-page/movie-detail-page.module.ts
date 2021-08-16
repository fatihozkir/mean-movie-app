import { CoreModule } from './../../../core/modules/core.module';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import { MovieDetailPageComponent } from './movie-detail-page.component';
@NgModule({
  imports: [CoreModule, MatPaginatorModule,MatCardModule],
  exports: [MovieDetailPageComponent],
  declarations: [MovieDetailPageComponent],
  providers: [],
})
export class MovieDetailPageModule {}
