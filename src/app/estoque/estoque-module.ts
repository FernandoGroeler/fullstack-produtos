import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoqueRoutingModule } from './estoque-routing-module';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastroProdutoComponent
  ],
  imports: [
    CommonModule,
    EstoqueRoutingModule,
    ReactiveFormsModule
  ]
})
export class EstoqueModule { }
