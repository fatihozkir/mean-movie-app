import { HomePageComponent } from './home-page.component';
import { CoreModule } from './../../../core/modules/core.module';
import { CardComponent } from './../../components/card/card.component';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [CoreModule, MatPaginatorModule],
  exports: [HomePageComponent, CardComponent],
  declarations: [HomePageComponent, CardComponent],
  providers: [],
})
export class HomePageModule {}
