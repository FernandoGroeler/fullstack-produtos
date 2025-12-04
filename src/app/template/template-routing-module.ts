import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'paginas',
    component: Layout,
    children: [
      {
        path: 'estoque',
        loadChildren: () => import('../estoque/estoque-module').then(m => m.EstoqueModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
