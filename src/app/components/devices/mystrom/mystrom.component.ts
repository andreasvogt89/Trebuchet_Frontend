import {Component, OnDestroy, OnInit} from '@angular/core';
import {MyStromData} from '../../models/myStromData';
import {WebsocketService} from '../../../services/websocket/websocket.service';
import {Message} from '@stomp/stompjs';
import {StompState} from '@stomp/ng2-stompjs';
import {Router} from '@angular/router';
import {HttpDataService} from '../../../services/http/HttpDataServcie';




@Component({
  selector: 'app-mystromis',
  templateUrl: './mystrom.component.html',
  styleUrls: ['./mystrom.component.css']
})
export class MystromComponent implements OnInit, OnDestroy {
  mystromisButtonList: MyStromData[];
  webSocketService: WebsocketService;
  state = 'NOT CONNECTED';
  totalPower: number;

  constructor(private router: Router, private httpDataService: HttpDataService) {
  }

  ngOnInit(): void {
    this.webSocketService = new WebsocketService('ws:192.168.1.220:8080/ws/mystrom', '/broker/submystrom');
    // Subscribe to its stream (to listen on messages)
    this.webSocketService.stream().subscribe((message: Message) => {
      this.mystromisButtonList = JSON.parse(message.body);
      this.calculateTotalPower();
    });

    // Subscribe to its state (to know its connected or not)
    this.webSocketService.state().subscribe((state: StompState) => {
      this.state = StompState[state];
    });

  }

  goToPage(pagename: string, parameter: string) {
    this.router.navigate([pagename, parameter]);
  }

  calculateTotalPower() {
    this.totalPower = 0;
    this.mystromisButtonList.forEach(x => {
      this.totalPower = Math.round((this.totalPower + x.power) * 100) / 100;
    });
  }

  ngOnDestroy(): void {
    this.webSocketService.disconnect();
  }
}
