import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'canais-de-atendimento',
    loadChildren: () => import('./canais-de-atendimento/canais-de-atendimento.module').then( m => m.CanaisDeAtendimentoPageModule)
  },
  {
    path: 'solicitacoes',
    loadChildren: () => import('./solicitacoes/solicitacoes.module').then( m => m.SolicitacoesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
