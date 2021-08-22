<<<<<<< HEAD
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 4be9e422a514fac4c37597a16642d1b6d1ede8c9

@Component({
  selector: 'app-my-chat',
  templateUrl: './my-chat.component.html',
<<<<<<< HEAD
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
=======
  styleUrls: ['./my-chat.component.css']
})
export class MyChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
>>>>>>> 4be9e422a514fac4c37597a16642d1b6d1ede8c9
