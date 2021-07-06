import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CloudinaryService } from '../services/cloudinary.service';
import { Event } from '@angular/router';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  blob = new Array<Blob>();
  fileupload: File = new File(this.blob, '');
  imageUrl: string | ArrayBuffer | null = null;

  constructor(

    public cloudinaryService: CloudinaryService,
    private cdr: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.cloudinaryService.responses = [];
    this.cloudinaryService.uploadToCloudinary();
  }

  imageSelectForUpload(event: { target: HTMLInputElement }){
    this.fileupload = event.target.files![0];
    var reader = new FileReader();
    reader.readAsDataURL(this.fileupload); 
    reader.onload = (_event) => { 
      this.imageUrl = reader.result; 
      console.log(this.imageUrl?.toString());
      this.cdr.detectChanges();
    }
  }
}
