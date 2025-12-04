import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProduto } from './cadastro-produto/cadastro-produto.component';

const routes: Routes = [
  {
    path: '',
    component: CadastroProduto
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoqueRoutingModule { }
