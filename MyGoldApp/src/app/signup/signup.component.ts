import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  genders =['Male','Female'];


  defaultvalue ={
    firstname:'',
    middlename:'',
    lastname:''
  };

  @ViewChild('f') signUpForm : NgForm | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(form : NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    console.log('form submitted successfully');
  console.log(this.signUpForm);
  }

}
