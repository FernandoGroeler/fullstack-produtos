import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoqueRoutingModule } from './estoque-routing-module';
import { CadastroProduto } from './cadastro-produto/cadastro-produto.component';


@NgModule({
  declarations: [
    CadastroProduto
  ],
  imports: [
    CommonModule,
    EstoqueRoutingModule
  ]
})
export class EstoqueModule { }
