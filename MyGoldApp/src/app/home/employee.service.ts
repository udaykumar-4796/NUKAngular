import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { studentInterface } from 'src/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
     private url="../assets/data/employee.json";
  constructor(private httpClient: HttpClient){}
  
  getEmployees():Observable<studentInterface>{
    return this.httpClient.get<studentInterface>(this.url);
  }
}
