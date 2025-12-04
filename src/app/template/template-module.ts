import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing-module';
import { Layout } from './layout/layout.component';
import { EstoqueModule } from '../estoque/estoque-module';


@NgModule({
  declarations: [
    Layout
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    EstoqueModule
  ]
})
export class TemplateModule { }
