import { Component } from '@angular/core';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat';

  message: string = '';

  constructor(
    public chat: ChatService,

  ) {

  }

  sendMessage() {
    this.chat.sendMessage(this.message)
  }
}
