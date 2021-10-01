import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { customersComponent } from './customers/customers.component';
import { loginComponent } from './login/login.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
         path: 'customers', component: customersComponent 
      },
      { path: 'login', canActivate: [], component: loginComponent },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
