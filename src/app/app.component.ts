import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion = 'pet';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(){
    console.log(this.signUpForm);
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }
}
