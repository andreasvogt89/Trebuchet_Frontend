import {Component, OnInit} from '@angular/core';
import {HttpDataService} from '../../../services/http/HttpDataServcie';
import {Settings} from '../../models/settings';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],

})
export class SettingsComponent implements OnInit {
 settings: Settings;

  constructor(private httpDataService: HttpDataService) { }

  ngOnInit(): void {
    this.httpDataService.getSettings().subscribe((data: Settings) => {
      this.settings = data;
    });
  }

  setSettings() {
    this.httpDataService.setSettings(this.settings).subscribe(settings => this.settings = settings);
  }

  onKey(event) {
   this.settings.reportHours = event.target.value;
  }

  onMouse(event) {
    this.settings.reportHours = event.target.value;
  }
}
