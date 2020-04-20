import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data, ParamMap} from '@angular/router';
import {HttpDataService} from '../../../services/http/HttpDataServcie';
import {MyStromData} from '../../models/myStromData';
import { Chart } from 'chart.js';
import {Settings} from '../../models/settings';


@Component({
  selector: 'app-mystromdetails',
  templateUrl: './mystromdetails.component.html',
  styleUrls: ['./mystromdetails.component.css']
})
export class MystromdetailsComponent implements OnInit {
  detailsof: string;
  timeStamps = [];
  temperatures = [];
  LinechartTemp = [];
  power = [];
  LinechartEnergy = [];
  settings: Settings;

  constructor(private router: ActivatedRoute, private httpDataService: HttpDataService) {
  }

  ngOnInit(): void {
    this.httpDataService.getSettings().subscribe((data: Settings) => {
      this.settings = data;
    });
    this.router.paramMap.subscribe(
      (params: ParamMap) => {
        this.detailsof = params.get('name');
      });
    this.httpDataService.get_list(this.detailsof).subscribe((result: MyStromData[]) => {
      result.forEach(x => {
        const date = new Date(x.timestamp);
        this.timeStamps.push(date.getHours() + ':' + date.getMinutes());
        this.temperatures.push(x.temperature);
        this.power.push(x.power);
      });
      this.LinechartTemp = new Chart('temp', {
        type: 'line',
        data: {
          labels: this.timeStamps,
          datasets: [
            {
              data: this.temperatures,
              label: 'Temperatur °C',
              borderColor: '#444',
              backgroundColor: '#53628c',
            }
          ]
        },
        options: {
          layout: {
            padding: {
              left: 200,
              right: 200,
              bottom: 100,
            }
          },
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
      this.LinechartEnergy = new Chart('energy', {
        type: 'line',
        data: {
          labels: this.timeStamps,
          datasets: [
            {
              data: this.power,
              label: 'Leistung Watt',
              borderColor: '#444',
              backgroundColor: '#53628c',
            }
          ]
        },
        options: {
          layout: {
            padding: {
              left: 200,
              right: 200,
              bottom: 100
            }
          },
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
  }
}
