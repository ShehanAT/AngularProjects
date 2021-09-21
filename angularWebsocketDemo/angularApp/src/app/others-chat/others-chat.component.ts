import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from '../chat/chat.service';
import { ChatMessage } from '../models/chat.message';

@Component({
  selector: 'app-others-chat',
  templateUrl: './others-chat.component.html',
  styleUrls: ['./others-chat.component.css']
})
export class OthersChatComponent implements OnInit {
  current_user : string | null;
  @Input() message: ChatMessage;

  constructor(
    public chatService: ChatService
  ){
    if(sessionStorage.getItem("username")){
      this.current_user = sessionStorage.getItem("username");
    }
      
  }

  ngOnInit(){

  }
}
