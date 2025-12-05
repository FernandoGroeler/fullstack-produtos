import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing-module';
import { LayoutComponent } from './layout/layout.component';
import { EstoqueModule } from '../estoque/estoque-module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    EstoqueModule
  ]
})
export class TemplateModule { }
