import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import {MystromComponent} from './components/devices/mystrom/mystrom.component';
import {MystromdetailsComponent} from './components/devices/mystromdetails/mystromdetails.component';
import {SettingsComponent} from './components/pages/settings/settings.component';
import {KrakenComponent} from './components/pages/kraken/kraken.component';


const routes: Routes = [
  { path: 'devices', component: MystromComponent },
  { path: 'devices/details/:name', component: MystromdetailsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'kraken', component: KrakenComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
