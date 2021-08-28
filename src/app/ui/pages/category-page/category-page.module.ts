import { CoreModule } from './../../../core/modules/core.module';
import { NgModule } from '@angular/core';
import { CategoryPageComponent } from './category-page.component';

@NgModule({
  imports: [CoreModule],
  exports: [],
  declarations: [CategoryPageComponent],
  providers: [],
})
export class CategoryPageModule {}
