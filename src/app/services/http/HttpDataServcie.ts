import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MyStromData} from '../../components/models/myStromData';
import {Observable} from 'rxjs';
import {Settings} from '../../components/models/settings';
import {catchError} from 'rxjs/operators';


@Injectable()
export class HttpDataService {
  baseUrl = 'http://trebuchet.ddns.net:8080';

  constructor(private httpClient: HttpClient) {
  }

  // Get amount of devices and infos
  get_devices(): Observable<MyStromData[]> {
    return this.httpClient.get<MyStromData[]>(this.baseUrl + '/ms');
  }

  get_list(deviceName: string) {
    return this.httpClient.get(this.baseUrl + '/list/' + deviceName);
  }

  getSettings() {
    return this.httpClient.get(this.baseUrl + '/settings');
  }

  setSettings(settings: Settings): Observable <Settings> {
   return this.httpClient.post<Settings>(this.baseUrl + '/settings', settings);
  }

}
