import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';


const API_CUSTOMERS_URL = `${environment.apiUrl}/api/users`;

@Injectable({
  providedIn: 'root',
})
export class CustomerHTTPService {
  constructor(private http: HttpClient) { }

  // public methods
  GetCustomers(page): Observable<any> {
    return this.http.get<any>(`${API_CUSTOMERS_URL}?page=${page}`);
  }

  GetCustomer(id): Observable<any> {
    return this.http.get<any>(`${API_CUSTOMERS_URL}/${id}`);
  }

  SaveCustomers(name, job): Observable<any> {
    var data = {
      "name": name,
      "job": job
    }
    return this.http.post<any>(API_CUSTOMERS_URL, data);
  }
  EditCustomers(name, job): Observable<any> {
    var data = {
      "name": name,
      "job": job
    }
    return this.http.post<any>(API_CUSTOMERS_URL, data);
  }
}
