import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { careerInterface } from './career';

@Injectable({
  providedIn: 'root'
})
export class CareerService {
   private url="../assets/data/career.json"

  constructor(private httpClient: HttpClient) { }

  getJobs():Observable<careerInterface>{
    return this.httpClient.get<careerInterface>(this.url);
  }
}
