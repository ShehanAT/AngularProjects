import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CloudinaryService } from '../services/cloudinary.service';
import { ImagePreview } from '../services/image-preview.directive';
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

  imageSelected: boolean = false;

  constructor(

    public cloudinaryService: CloudinaryService,
    private imagePreview: ImagePreview,
    private cdr: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.cloudinaryService.responses = [];
    this.cloudinaryService.uploadToCloudinary();
  }

  changeImageSelected(event: Event){
    console.log(event);
    this.imageSelected = true;
  }

  imageSelectForUpload(event: { target: HTMLInputElement }){
    console.log(event.target?.files);
    this.fileupload = event.target.files![0];
    this.cloudinaryService.uploadToCloudinary();
    this.cloudinaryService.uploader
    
    var reader = new FileReader();
    reader.readAsDataURL(this.fileupload); 
    reader.onload = (_event) => { 
      this.imageUrl = reader.result; 
      console.log(this.imageUrl?.toString());
      this.cdr.detectChanges();
    }
   
  }
}
