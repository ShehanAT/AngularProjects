import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordRandomizerPipe } from './pipes/word-randomizer.pipe';
import { WordFormComponent } from './word-form/word-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WordRandomizerPipe,
    WordFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
