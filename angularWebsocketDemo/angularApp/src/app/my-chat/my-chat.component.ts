import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from '../chat/chat.service';
import { ChatMessage } from '../models/chat.message';

@Component({
  selector: 'app-my-chat',
  templateUrl: './my-chat.component.html',
  styleUrls: ['./my-chat.component.css']
})
export class MyChatComponent implements OnInit {
  current_user : String | null = null;
  @Input() message: ChatMessage | null = null;
  
  constructor(public chatService : ChatService) { }

  ngOnInit(): void {
  }

}
