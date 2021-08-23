import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class TouchedErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public matcher = new TouchedErrorStateMatcher();

  public readonly ACCOUNT_VALIDATION_MESSAGE = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain uppercase, lowercase and number' }
    ]
  }
  get f() { return this.form.controls; }

  constructor(
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  public initializeForm(): void {
    this.form = this.formBuilder.group({
      email: [
        '',
        Validators.compose(
          [
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
          ]
        )],
      password: [
        '',
        Validators.compose(
          [
            Validators.minLength(6),
            Validators.required,
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
          ])]
    });
  }
}
