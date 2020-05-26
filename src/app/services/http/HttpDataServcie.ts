import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MyStromData} from '../../components/models/myStromData';
import {Observable} from 'rxjs';
import {Settings} from '../../components/models/settings';

@Injectable()
export class HttpDataService {
  baseUrl = 'http://192.168.1.220:8080';

  constructor(private httpClient: HttpClient) {
  }
  // Get amount of devices and infos
  get_devices(): Observable<MyStromData[]> {
    return this.httpClient.get<MyStromData[]>(this.baseUrl + '/ms');
  }

  get_Kraken_info() {
  return this.httpClient.get('http://192.168.1.220:5000/webapi/auth.cgi?api=SYNO.API.Auth&version=3&method=login&account=Andreas&passwd=4556@A89xy$$&session=FileStation&format=cookie');
  }

  get_list(deviceName: string) {
    return this.httpClient.get(this.baseUrl + '/list/' + deviceName);
  }

  getSettings() {
    return this.httpClient.get(this.baseUrl + '/settings');
  }

  getAverageValues(deviceName: string) {
    return this.httpClient.get(this.baseUrl + '/' + deviceName + '/calc');
  }

  setSettings(settings: Settings): Observable <Settings> {
   return this.httpClient.post<Settings>(this.baseUrl + '/settings', settings);
  }

}
