import { CoreModule } from './../../../core/modules/core.module';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CategoryDetailPageComponent } from './category-detail-page.component';

@NgModule({
  imports: [CoreModule, MatPaginatorModule],
  exports: [CategoryDetailPageComponent],
  declarations: [CategoryDetailPageComponent],
  providers: [],
})
export class CategoryDetailPageModule {}
