import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  
  imagem: any = null;
  
  private options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(private camera: Camera,  private sn: DomSanitizer) { }

  ngOnInit() { }

  baterFoto() {
    this.camera.getPicture(this.options).then((imageData) => {
      this.imagem = this.sn.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + imageData);
    }, (err) => {
      alert('Ops!\nHouve um erro');
      console.log(err)
    });
  }

}