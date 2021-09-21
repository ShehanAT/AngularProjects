import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ChatMessage } from '../models/chat.message';
import ReconnectingWebSocket from '../services/reconnecting-websocket';
import sampleChatMessages from "../../assets/sample-chat-messages.json";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public messages: ChatMessage[] = new Array<ChatMessage>();
  private websocket: ReconnectingWebSocket | null = null;
  private chatGroupId: number = 0;
  @Input() currentUserId: string;
  constructor() { }

  ngOnInit(): void {
    this.callWebsocket();
    this.messages = sampleChatMessages.chatMessages;
    // for(var i = 0; i < sampleChatMessages?.chatMessages.length; i++){
    //   var chatMessage = new ChatMessage();
    //   chatMessage = 
    // }
  }

  callWebsocket(){
    
    this.websocket = new ReconnectingWebSocket(
      environment.WS_URL + "/ws/classroom/" + this.chatGroupId
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
      chatMessage.type = data.type;
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
