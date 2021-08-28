import { CardComponent } from './../../ui/components/card/card.component';
import { MaterialModule } from './material.module';
import { NumberToHourPipe } from './../pipes/numberToHour.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MainTitleComponent } from './../../ui/components/main-title/main-title.component';
import { HeaderComponent } from './../../ui/components/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './../../ui/components/footer/footer.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    MatButtonModule,
  ],
  exports: [
    NumberToHourPipe,
    HeaderComponent,
    FooterComponent,
    MainTitleComponent,
    CardComponent,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    NgbModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainTitleComponent,
    CardComponent,
    NumberToHourPipe,
  ],
  providers: [],
})
export class CoreModule {}
