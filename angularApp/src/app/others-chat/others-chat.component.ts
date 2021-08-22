import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ChatMessage } from "../models/chat.message";
import { environment } from "./../../../enivironments/environment.dev.ts";

@Component({
    selector: 'app-others-chat',
    templateUrl: './others-chat.component.html',
    styleUrls: ['./others-chat.component.css']
})
export class OthersChatComponent implements OnInit {
    current_user : String;
    @Input() message: ChatMessage;

    constructor(){
        this.current_user = sessionStorage.getItem("username");
    }

    isOthers(username : String){
        return username !== this.current_user;
    }
}