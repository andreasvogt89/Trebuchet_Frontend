import { StompService, StompConfig, StompState } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';
import {BehaviorSubject, Observable} from 'rxjs';


export class WebsocketService {
  private messages: Observable<Message>;
  private stompService: StompService;

  constructor(socketUrl: string, streamUrl: string) {
    // Create Stomp Configuration
    const stompConfig: StompConfig = {

      url: socketUrl,
      headers: {
        login: '',
        passcode: ''
      },

      heartbeat_in: 0,
      heartbeat_out: 20000,
      reconnect_delay: 5000,
      debug: true
    };

    // Create Stomp Service
    this.stompService = new StompService(stompConfig);

    // Connect to a Stream
    this.messages = this.stompService.subscribe(streamUrl);
  }

  public stream(): Observable<Message> {
    return this.messages;
  }

  public send(url: string, message: any) {
    return this.stompService.publish(url, JSON.stringify(message));
  }

  public state(): BehaviorSubject<StompState> {
    return this.stompService.state;
  }

}
