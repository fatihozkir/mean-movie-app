import { HeaderComponent } from './../../ui/components/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './../../ui/components/footer/footer.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [NgbModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    NgbModule,
    RouterModule,
    CommonModule,
  ],
  declarations: [HeaderComponent, FooterComponent],
  providers: [],
})
export class CoreModule {}
