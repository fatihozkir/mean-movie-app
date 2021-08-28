import { MainLayoutComponent } from './main-layout.component';
import { ListGroupComponent } from './../../components/list-group/list-group.component';
import { CoreModule } from './../../../core/modules/core.module';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  imports: [CoreModule, MatProgressSpinnerModule],
  exports: [],
  declarations: [MainLayoutComponent, ListGroupComponent],
  providers: [],
})
export class MainLayoutModule {}
