import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './create/create-customer.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
  }, 
  {
    path: 'cadastro',
    component: CreateCustomerComponent,
  }, 
  {
    path: 'editar/:id',
    component: CreateCustomerComponent,
  },  
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: '**', redirectTo: 'customer', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule { }
