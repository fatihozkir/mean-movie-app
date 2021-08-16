import { MoviePageComponent } from './movie-page.component';
import { CoreModule } from './../../../core/modules/core.module';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  imports: [CoreModule, MatPaginatorModule,MatCardModule],
  exports: [MoviePageComponent],
  declarations: [MoviePageComponent],
  providers: [],
})
export class MoviePageModule {}
