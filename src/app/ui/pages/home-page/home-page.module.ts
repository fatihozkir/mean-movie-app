import { HomePageComponent } from './home-page.component';
import { CoreModule } from './../../../core/modules/core.module';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [CoreModule],
  exports: [],
  declarations: [HomePageComponent],
  providers: [],
})
export class HomePageModule {}
