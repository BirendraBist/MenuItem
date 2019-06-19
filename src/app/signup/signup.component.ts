import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../passwordValidator';
import { LoginService } from '../login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  form: FormGroup;
  invalidLoginMessage;

  constructor(fb: FormBuilder, private loginService: LoginService , private route: ActivatedRoute) {

    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required,
      PasswordValidator.cannotContainSpace])]
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.invalidLoginMessage = params.invalidLoginMessage;
    });
  }

  onSignup() {
    const result = this.loginService.signup(
      this.form.controls.username.value,
      this.form.controls.password.value);

    if (!result) {
      this.form.controls.password.setErrors({
        invalidLogin: true
      });
    }
  }
}


