import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPageRoutingModule } from './cadastro-routing.module';

import { CadastroPage } from './cadastro.page';
import {Camera} from '@ionic-native/camera/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPageRoutingModule
  ],
  providers: [
    Camera
  ],
  declarations: [CadastroPage],
  
})
export class CadastroPageModule {}
