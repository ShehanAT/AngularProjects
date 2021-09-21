import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ChatMessage } from '../models/chat.message';
import ReconnectingWebSocket from '../services/reconnecting-websocket';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public messages: ChatMessage[] = new Array<ChatMessage>();
  private websocket: ReconnectingWebSocket | null = null;
  private chatGroupId: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.callWebsocket();
  }

  callWebsocket(){
    
    this.websocket = new ReconnectingWebSocket(
      environment.WS_URL + "ws/classroom/" + this.chatGroupId
    );

    this.websocket.onopen = (evt) => {
      console.log("Successfully connected to websocket!");
    }

    this.websocket.onclose = () => {
      console.log("... trying to reconnect websocket in 3 seconds");
      setTimeout(this.callWebsocket, 3000);
    }

    this.websocket.onmessage = (evt) => {
      const data = JSON.parse(evt.data);
      var chatMessage = new ChatMessage();
      chatMessage.content = data.message;
      chatMessage.username = data.user;
      chatMessage.timestamp = data.timestamp;
      chatMessage.the_type = data.the_type;
      chatMessage.user_profile_img = data.user_profile_img;
      this.messages.push(chatMessage);
    }
  }

  formatDate(dateToFormat : string | undefined) {
    if(dateToFormat){
      const date = new Date(dateToFormat)
      const today = new Date
      const yesterday = new Date 
      let format_date = date.toLocaleDateString(
        'en-US',{weekday:'long',month:'long',day:'numeric'}
      )
      yesterday.setDate(today.getDate() - 1)
      if(date.toLocaleDateString() == today.toLocaleDateString()){
        format_date = 'Today'
      }else if (date.toLocaleDateString() == yesterday.toLocaleDateString()){
        format_date = 'Yesterday'
      }
      return format_date
    }
    return null;
  }
}
