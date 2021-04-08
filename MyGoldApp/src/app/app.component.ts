import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyGoldApp';
  public parentMsg="This is Parent Message";
  public msg:any;

  onClick(event : Event){
     console.log(event);
  }
}
