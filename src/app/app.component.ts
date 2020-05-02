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
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

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
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswered;
    this.user.gender = this.signUpForm.value.gender;
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }
}
