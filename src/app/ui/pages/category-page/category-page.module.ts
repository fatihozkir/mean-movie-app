import { CoreModule } from './../../../core/modules/core.module';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CategoryPageComponent } from './category-page.component';

@NgModule({
  imports: [CoreModule, MatPaginatorModule],
  exports: [CategoryPageComponent],
  declarations: [CategoryPageComponent],
  providers: [],
})
export class CategoryPageModule {}
