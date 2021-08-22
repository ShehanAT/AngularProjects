import { NumberFormatStyle } from '@angular/common';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat/chat.service';
import { ChatMessage } from '../models/chat.message';

@Component({
  selector: 'app-others-chat',
  templateUrl: './others-chat.component.html',
  styleUrls: ['./others-chat.component.css']
})
export class OthersChatComponent implements OnInit {
  current_user : String | null = null;
  @Input() message: ChatMessage | null = null;


  constructor(public chatService : ChatService) { }

  ngOnInit(): void {
  }

  isOthers(username:string | undefined){
    return username !== this.current_user;
}

}
