import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  public formatTime(timestamp : number | undefined){
    // return timestamp.indexOf(':')== -1?
    // moment(Number(timestamp)).format('LT'):timestamp
    return moment(Number(timestamp)).format('LT')
  }
}

