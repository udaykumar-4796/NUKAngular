import { Component, OnInit } from '@angular/core';
import { CareerService } from '../career.service';
import { CareerModel } from './career.model';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  public mycareer:any =[];

  constructor(private careerService:CareerService) { }

  ngOnInit(){
    this.careerService.getJobs().subscribe(data => this.mycareer=data);
  }

}
