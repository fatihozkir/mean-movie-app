import { CoreModule } from 'src/app/core/modules/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';

@NgModule({
  imports: [CoreModule],
  declarations: [LoginPageComponent],
})
export class LoginPageModule {}
