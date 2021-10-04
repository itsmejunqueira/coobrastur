import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'clientes',
        loadChildren: () =>
          import('../customers/customers.module').then((m) => m.CustomersModule),
      },
      {
        path: '',
        redirectTo: '/clientes',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
