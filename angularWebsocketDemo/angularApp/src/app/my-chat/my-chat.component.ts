import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-chat',
  templateUrl: './my-chat.component.html',
  styleUrls: ['./my-chat.component.css'],
})
export class MyChatComponent implements OnInit {
    current_user : String;
    @Input() message;

    constructor(){
        this.current_user = sessionStorage.getItem("username");
    }

    ngOnInit(): void {}

}