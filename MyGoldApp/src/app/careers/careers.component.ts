import { Component, OnInit } from '@angular/core';
import { CareerModel } from './career.model';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  mycareer : CareerModel[]=[
    new CareerModel(1,"Java","hyderabad","Software engineer","2-4","12-03-2021","Click to Apply"),
    new CareerModel(2,"Angular","bangalore","Desktop engineer","5-8","17-03-2021","Click to Apply"),
    new CareerModel(3,"Linux","chennai","Technical support","1-3","18-03-2021","Click to Apply")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
