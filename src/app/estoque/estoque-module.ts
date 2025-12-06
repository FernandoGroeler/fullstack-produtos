import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoqueRoutingModule } from './estoque-routing-module';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConsultaProdutoComponent } from './consulta-produto/consulta-produto.component';
import { GestaoEstoqueComponent } from './gestao-estoque/gestao-estoque.component';


@NgModule({
  declarations: [
    CadastroProdutoComponent,
    ConsultaProdutoComponent,
    GestaoEstoqueComponent
  ],
  imports: [
    CommonModule,
    EstoqueRoutingModule,
    ReactiveFormsModule
  ]
})
export class EstoqueModule { }
