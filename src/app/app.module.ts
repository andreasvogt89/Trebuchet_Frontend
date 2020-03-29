import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AboutComponent } from './components/pages/about/about.component';
import {MystromComponent} from './components/devices/mystrom/mystrom.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpDataService} from './services/http/HttpDataServcie';
import { MystromdetailsComponent } from './components/devices/mystromdetails/mystromdetails.component';
import { SettingsComponent } from './components/pages/settings/settings.component';
import {HighchartsChartModule} from 'highcharts-angular';

@NgModule( {
  declarations: [
    AppComponent,
    MystromComponent,
    HeaderComponent,
    AboutComponent,
    MystromdetailsComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule,
  ],
  providers: [
    HttpDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

