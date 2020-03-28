import { Component, OnInit } from '@angular/core';
import {MyStromData} from '../../models/myStromData';
import {WebsocketService} from '../../../services/websocket/websocket.service';
import {Message} from '@stomp/stompjs';
import {StompState} from '@stomp/ng2-stompjs';
import {ArraySlice} from 'zone.js/lib/common/utils';

@Component({
  selector: 'app-mystromis',
  templateUrl: './mystrom.component.html',
  styleUrls: ['./mystrom.component.css']
})
export class MystromComponent implements OnInit {
  mystromisButtonList: MyStromData[];
  webSocketService: WebsocketService;
  state = 'NOT CONNECTED';

  constructor() {}

  ngOnInit(): void {
    this.webSocketService = new WebsocketService('ws://localhost:8080/ws/mystrom', '/broker/submystrom');
    // Subscribe to its stream (to listen on messages)
    this.webSocketService.stream().subscribe((message: Message) => {
      this.mystromisButtonList = JSON.parse(message.body);
      console.log(this.mystromisButtonList);
    });

    // Subscribe to its state (to know its connected or not)
    this.webSocketService.state().subscribe((state: StompState) => {
      this.state = StompState[state];
    });
  }
}
