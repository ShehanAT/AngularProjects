import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CloudinaryService } from '../services/cloudinary.service';
import { Directive } from '@angular/core';
import { ImagePreview } from '../services/image-preview.directive';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  form: FormGroup = new FormGroup({
    cloudinaryImageUpload: new FormControl('', [])
  });

  constructor(

    public cloudinaryService: CloudinaryService,
    private imagePreview: ImagePreview
  ) { }

  ngOnInit(): void {
    this.cloudinaryService.responses = [];
    this.cloudinaryService.uploadToCloudinary();
  }



}
