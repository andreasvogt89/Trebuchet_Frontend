import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AboutComponent } from './components/pages/about/about.component';
import {MystromComponent} from './components/devcies/mystrom/mystrom.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpDataService} from './services/http/HttpDataServcie';

@NgModule( {
  declarations: [
    AppComponent,
    MystromComponent,
    HeaderComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    HttpDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

