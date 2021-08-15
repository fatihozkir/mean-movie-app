import { MainLayoutModule } from './../../ui/layouts/main-layout/main-layout.module';
import { CoreModule } from './core.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CoreModule],
  exports: [MainLayoutModule],
  declarations: [],
  providers: [],
})
export class LayoutModule {}
