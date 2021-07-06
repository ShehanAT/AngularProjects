import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input, NgZone } from '@angular/core';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';

@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {
  uploaderOptions: FileUploaderOptions = {
    url: `https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/upload`,
    autoUpload: false,
    isHTML5: true,
    removeAfterUpload: true,
    // XHR request headers
    headers: [
      {
        name: 'X-Requested-With',
        value: 'XMLHttpRequest'
      }
    ],
  };
  uploader: FileUploader = new FileUploader(this.uploaderOptions)
  @Input()
  responses: Array<any>;
  title: string;
  fileUploadUrl: string = '';
  imageUploaded: boolean = false;
  hasBaseDropZoneOver: boolean = false;
  constructor(
    private cloudinary: Cloudinary,
    private zone: NgZone,
    private http: HttpClient
    ) { 
    this.responses = [];
    this.title = '';
  }

 

  ngOnInit(){
  }

  uploadToCloudinary(){
    this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
      this.responses = [];
      this.title = '';
      form.append('upload_preset', this.cloudinary.config().upload_preset);
      let tags = 'myphotoalbum';
      if (this.title) {
        form.append('context', `photo=${this.title}`);
        tags = `myphotoalbum,${this.title}`;
      }
      form.append('folder', 'angular_sample');
      form.append('tags', tags);
      form.append('file', fileItem);
      fileItem.withCredentials = false;
      return { fileItem, form };
    };
  
    const upsertResponse = (fileItem: any )=> {
      this.zone.run(() => {
        const existingId = this.responses.reduce((prev, current, index) => {
          
          if (current.file.name === fileItem.file.name && !current.status) {
            return index;
          }
          return prev;
        }, -1);
        if (existingId > -1) {
          this.responses[existingId] = Object.assign(this.responses[existingId], fileItem);
        } else {
          this.responses.push(fileItem);
        }
      });
      this.fileUploadUrl = this.responses[0]?.data.secure_url;
      this.imageUploaded = true;

    };
  
    this.uploader.onCompleteItem = (item: any, response: string, status: number, headers: ParsedResponseHeaders) =>{
      upsertResponse(
        {
          file: item.file,
          status,
          data: JSON.parse(response)
        }
      );
     
    }
  
    this.uploader.onProgressItem = (fileItem: any, progress: any) => {
      upsertResponse(
        {
          file: fileItem.file,
          progress,
          data: {}
        }
      );
    }
  }

  updateTitle(value: string){
    this.title = value;
  }

  deleteImage = function (this: CloudinaryService, data: any, index: number) {
    const url = `https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/delete_by_token`;
    var httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json', 
        'X-Requested-With': 'XMLHttpRequest' 
      })
    }
    const body = {
      token: data.delete_token
    };
    this.http.post(url, body, httpOptions).subscribe((response: any) => {
      console.log(`Deleted image - ${data.public_id} ${response.result}`);
      this.responses.splice(index, 1);
    });
  };
  
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
  
  
  getFileProperties(fileProperties: any){
    
    if(!fileProperties){
      return null;
    }
  
    Object.keys(fileProperties).map((key) => 
      console.log(key + ": " + fileProperties[key])
    );
  
    return Object.keys(fileProperties)
    .map((key) => ({ 'key': key, 'value': fileProperties[key] }))
  }
}
