import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgControlStatus, Validators } from '@angular/forms';
import {upperAndLowerCase} from "./custom-form-controls";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit {
  profileForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)] ),
    password: new FormControl('', [Validators.required, upperAndLowerCase]),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl(''),

  });

  constructor() {
    this.profileForm.get('email').setErrors({
      email: true
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.warn("not a safe move but here is your form:" );
    console.warn(this.profileForm.value);
  }

  get username() { return this.profileForm.get('username'); }

  get password() { return this.profileForm.get('password'); }

  get email() { return this.profileForm.get('email'); }


}
