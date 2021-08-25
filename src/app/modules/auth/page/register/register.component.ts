import { REGISTER_VALIDATION_MESSAGE } from './constant';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helper/must-match';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public REGISTER_VALIDATION_MESSAGE = REGISTER_VALIDATION_MESSAGE;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  get f() {
    return this.form.controls;
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
      firstName: [
        '',
        Validators.compose(
          [
            Validators.maxLength(20),
            Validators.minLength(6),
            Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
            Validators.required
          ])],
      lastName: [
        '',
        Validators.compose(
          [
            Validators.maxLength(20),
            Validators.minLength(6),
            Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
            Validators.required
          ])],
      password: [
        '',
        Validators.compose(
          [
            Validators.minLength(6),
            Validators.required,
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
          ])],
      confirmPassword: [
        '',
        Validators.compose(
          [
            Validators.minLength(6),
            Validators.required,
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
          ])]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }
}
