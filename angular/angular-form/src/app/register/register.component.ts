import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators, FormBuilder } from '@angular/forms';

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ?
    null : {
      passwordnotmatch: true
    };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  registerForm: FormGroup;
  ngOnInit() {
    this.registerForm= this.fb.group({
      email: ['', 
      [Validators.required, Validators.email]],
      pwGroup: this.fb.group({
      password: '',
      confirmPassword: ''
      }, {validator: comparePassword})
      });
  }
  onSubmit(profileForm) {
  }

}
