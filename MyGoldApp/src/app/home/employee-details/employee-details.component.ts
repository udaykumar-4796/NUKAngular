import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employees:any=[];

  constructor(private empService:EmployeeService) { }

  ngOnInit(){
    this.empService.getEmployees().subscribe(data => this.employees=data);
  }

}
