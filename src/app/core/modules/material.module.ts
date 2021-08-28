import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  exports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,

    MatPaginatorModule,
  ],
})
export class MaterialModule {}
