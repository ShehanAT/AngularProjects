import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeatherModule } from 'angular-feather';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { MyChatComponent } from './my-chat/my-chat.component';
import { OthersChatComponent } from './others-chat/others-chat.component';
import { Edit2 } from 'angular-feather/icons';

const icons = {
  Edit2
};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    MyChatComponent,
    OthersChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatherModule.pick(icons)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    FeatherModule
  ]
})
export class AppModule { }
