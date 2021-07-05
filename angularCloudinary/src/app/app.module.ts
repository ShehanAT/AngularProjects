import { Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { CloudinaryConfiguration, CloudinaryModule } from '@cloudinary/angular-5.x';
import { Cloudinary as CloudinaryCore } from 'cloudinary-core';
import cloudinaryConfiguration from './config';
import { FileUploadModule } from "ng2-file-upload"; 
import { ImagePreview } from './services/image-preview.directive';

export const cloudinary = {
  Cloudinary: CloudinaryCore
};
export const config: CloudinaryConfiguration = cloudinaryConfiguration;

@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CloudinaryModule.forRoot(cloudinary, config),
    HttpClientModule,
    FileUploadModule,
    Directive
  ],
  providers: [ImagePreview],
  bootstrap: [AppComponent]
})
export class AppModule { }
