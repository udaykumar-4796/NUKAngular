import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild('f') signInForm:NgForm | undefined

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.signInForm);
  }
}
