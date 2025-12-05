import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ConsultaProdutoComponent } from './consulta-produto/consulta-produto.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultaProdutoComponent,
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    component: CadastroProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoqueRoutingModule { }
