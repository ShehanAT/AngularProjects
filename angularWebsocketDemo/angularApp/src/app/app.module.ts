import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
<<<<<<< HEAD
=======
import { MyChatComponent } from './my-chat/my-chat.component';
import { OthersChatComponent } from './others-chat/others-chat.component';
>>>>>>> 4be9e422a514fac4c37597a16642d1b6d1ede8c9

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
<<<<<<< HEAD
    MessageComponent
=======
    MessageComponent,
    MyChatComponent,
    OthersChatComponent
>>>>>>> 4be9e422a514fac4c37597a16642d1b6d1ede8c9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
