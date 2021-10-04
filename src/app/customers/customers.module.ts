import { CustomersComponent } from './customers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCustomerComponent } from './create/create-customer.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [ 
    CustomersComponent,
    CreateCustomerComponent
  ],
  imports: [
    NgxPaginationModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
