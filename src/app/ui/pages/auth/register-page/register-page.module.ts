import { CoreModule } from 'src/app/core/modules/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './register-page.component';

@NgModule({
  imports: [CoreModule],
  declarations: [RegisterPageComponent],
})
export class RegisterPageModule {}
