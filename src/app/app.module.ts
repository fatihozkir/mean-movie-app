import { LayoutModule } from './core/modules/layout.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/modules/core.module';
import { PageModule } from './core/modules/page.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptor } from './core/interceptors/cache-interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule,
    PageModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
