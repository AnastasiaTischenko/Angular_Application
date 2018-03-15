import {Component, ElementRef, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthorizationService} from '../authorization.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  myform: FormGroup;
  langs: string[] = [
    'English',
    'French',
    'German',
  ];
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  constructor(private autho: AuthorizationService) {}

  createFormControls() {
    const validEmail = '[^ @]*@[^ @]*';
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern(validEmail)
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('', Validators.required);
  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }

  authorization() {
    if (this.myform.valid) {
      this.autho.authorization(this.myform.value);
      this.myform.reset();
    }
  }

  invalidAlarm(field): boolean {
    return field.errors && this.dirtyOrTouched(field);
  }

  isRequired(field): boolean {
    return field.errors.required;
  }

  displayFieldCss(field: ElementRef): Object {
    return {
      'has-danger': this.isFieldInvalid(field),
      'has-success': this.isFieldValid(field)
    };
  }

  isFieldValid(field): boolean {
    return field.valid && this.dirtyOrTouched(field);
  }

  isFieldInvalid(field): boolean {
    return field.invalid && this.dirtyOrTouched(field);
  }

  dirtyOrTouched(field): boolean {
    return field.dirty || field.touched;
  }
}
