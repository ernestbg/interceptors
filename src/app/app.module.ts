import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
