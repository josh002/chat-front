import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  io = io(environment.url, {
    withCredentials: true
  })

  messages: Array<{ type: number, message: string }> = []
  constructor(
    private http: HttpClient
  ) {

    this.io.on("receiveMessage", (socketMessage) => {
      this.messages.push({ type: 2, message: socketMessage });
    })
  }

  getResponse() {
    return this.http.get(`${environment.url}`);
  }

  sendMessage(message: string) {
    this.messages.push({ type: 1, message: message })
    this.io.emit("sendMessage", message);
  }

}
