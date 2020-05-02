import { Component, ViewChild } from '@angular/core';
import { NgForm, MaxLengthValidator } from '@angular/forms';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female', 'others'];

  suggestUserName() {
    const suggestedName = 'Superuser';

    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });

    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswered: '',
    //   gender: 'male'
    // });
  }

  onSubmit(){
    console.log(this.signUpForm);
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }
}
