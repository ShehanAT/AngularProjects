import { Component, OnInit } from '@angular/core';
import { ChatMessage } from "../models/chat.message";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private messages: ChatMessage[];
  private websocket: ReconnectingWebSocket;
  private chatGroupId: number; 
  constructor() { }

  ngOnInit(): void {
    callWebsocket();
  }

  callWebsocket(){
    
    this.websocket = new ReconnectingWebsocket(
      environment.WS_URL + "ws/classroom/" + this.group_id
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
      chatMessage.message = data.message;
      chatMessage.user = data.user;
      chatMessage.timestamp = data.timestamp;
      chatMessage.the_type = data.the_type;
      chatMessage.user_profile_img = data.user_profile_img;
      this.messages.push(chatMessage);
    }




  }



}
