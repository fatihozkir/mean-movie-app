import { DetailLayoutModule } from './../../ui/layouts/detail-layout/detail-layout.module';
import { MainLayoutModule } from './../../ui/layouts/main-layout/main-layout.module';
import { CoreModule } from './core.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CoreModule],
  exports: [MainLayoutModule, DetailLayoutModule],
  declarations: [],
  providers: [],
})
export class LayoutModule {}
