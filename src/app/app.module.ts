import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingBarModule } from 'src/libs/loading-bar/loading-bar.module';
import { DecoratorInterceptor } from 'src/libs/http/interceptors/decorator-interceptor';
import { LoadingInterceptor } from 'src/libs/http/interceptors/loading-interceptor';
import { API_URL } from 'src/libs/http/http-tokens';
import {environment} from "../environments/environment";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadingBarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule
  ],
  providers: [ 
    {provide: HTTP_INTERCEPTORS, useClass: DecoratorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
    {provide: API_URL, useValue: environment.api}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
