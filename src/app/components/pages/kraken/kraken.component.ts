import { Component, OnInit } from '@angular/core';
import {HttpDataService} from '../../../services/http/HttpDataServcie';

@Component({
  selector: 'app-kraken',
  templateUrl: './kraken.component.html',
  styleUrls: ['./kraken.component.css']
})
export class KrakenComponent implements OnInit {

  constructor(private httpDataService: HttpDataService) {
  }

  ngOnInit(): void {
    this.httpDataService.get_Kraken_info().subscribe((result: any) => {
    console.log(result.body);
  });
  }

}
