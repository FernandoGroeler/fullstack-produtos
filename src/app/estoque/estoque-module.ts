import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoqueRoutingModule } from './estoque-routing-module';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConsultaProdutoComponent } from './consulta-produto/consulta-produto.component';


@NgModule({
  declarations: [
    CadastroProdutoComponent,
    ConsultaProdutoComponent
  ],
  imports: [
    CommonModule,
    EstoqueRoutingModule,
    ReactiveFormsModule
  ]
})
export class EstoqueModule { }
