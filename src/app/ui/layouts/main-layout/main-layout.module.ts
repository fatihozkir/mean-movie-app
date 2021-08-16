import { MainTitleComponent } from './../../components/main-title/main-title.component';
import { MainLayoutComponent } from './main-layout.component';
import { ListGroupComponent } from './../../components/list-group/list-group.component';
import { CoreModule } from './../../../core/modules/core.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CoreModule],
  exports: [],
  declarations: [MainLayoutComponent, ListGroupComponent],
  providers: [],
})
export class MainLayoutModule {}
