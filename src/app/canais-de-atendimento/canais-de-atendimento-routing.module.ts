import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanaisDeAtendimentoPage } from './canais-de-atendimento.page';

const routes: Routes = [
  {
    path: '',
    component: CanaisDeAtendimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanaisDeAtendimentoPageRoutingModule {}
