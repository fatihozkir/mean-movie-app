import { MainTitleComponent } from './../../ui/components/main-title/main-title.component';
import { HeaderComponent } from './../../ui/components/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './../../ui/components/footer/footer.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [NgbModule, RouterModule, HttpClientModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainTitleComponent,
    NgbModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
  ],
  declarations: [HeaderComponent, FooterComponent, MainTitleComponent],
  providers: [],
})
export class CoreModule {}
