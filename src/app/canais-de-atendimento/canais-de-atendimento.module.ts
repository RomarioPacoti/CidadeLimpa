import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanaisDeAtendimentoPageRoutingModule } from './canais-de-atendimento-routing.module';

import { CanaisDeAtendimentoPage } from './canais-de-atendimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanaisDeAtendimentoPageRoutingModule
  ],
  declarations: [CanaisDeAtendimentoPage]
})
export class CanaisDeAtendimentoPageModule {}
