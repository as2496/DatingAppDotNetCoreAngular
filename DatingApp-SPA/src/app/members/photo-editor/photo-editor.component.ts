import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/_model/photo';
import { FileUploader } from 'ng2-file-upload';
import { AuthService } from 'src/app/_services/auth.service';
//import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {

  @Input() photos: Photo[];

  uploader: FileUploader;
  hasBaseDropZoneOver: false;
  response: string;
  //baseUrl: environment.apiUrl;

  constructor(private authservice: AuthService){
  }

  ngOnInit() {
    this.initializeUploader();
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
  initializeUploader(){
    this.uploader = new FileUploader({
      url: 'https://4000/',//this.baseUrl + 'users/' + this.authservice.decodedToken.nameid + '/photos',
      authToken: 'Bearer' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });
  }
}