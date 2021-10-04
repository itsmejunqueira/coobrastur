import { Component, OnInit } from "@angular/core";
import { CustomerHTTPService } from "./services/customers-http.service";


@Component({
  selector: 'customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers = [];
  pageIndex = 1;
  numberOfPages = 0;
  totalCount = 0;

  constructor(private customerService: CustomerHTTPService) {

  }
  ngOnInit(): void {
    this.loadCustomer();
  }

  loadCustomer(){
    this.customerService
      .GetCustomers(this.pageIndex)
      .subscribe((res) => {
        if (res) {
          this.customers = res.data;
          this.totalCount = res.total;
          this.numberOfPages = res.total_pages;
        } 
        console.log(this.customers);
      });
  }

  nextPage(){
    this.pageIndex +=1;
    this.loadCustomer();
  }

  lastPage(){
    this.pageIndex -=1;
    this.loadCustomer();
  }
  
}