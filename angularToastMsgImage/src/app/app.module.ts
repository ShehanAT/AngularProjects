import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastMsgWithImageComponent } from './toast-msg-with-image/toast-msg-with-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ToastMsgWithImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
