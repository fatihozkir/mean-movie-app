import { MaterialCardComponent } from './../../components/material-card/material-card.component';
import { CoreModule } from './../../../core/modules/core.module';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MovieDetailPageComponent } from './movie-detail-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  imports: [
    CoreModule,
    MatPaginatorModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTableModule,
  ],
  exports: [],
  declarations: [MovieDetailPageComponent, MaterialCardComponent],
  providers: [],
})
export class MovieDetailPageModule {}
