import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/_helpers/mustmatch';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  submitted = false;
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmpassword: new FormControl('', [Validators.required]),
    passwordrepeat: new FormControl('', [Validators.required]),
    acceptTerms: new FormControl(false, Validators.requiredTrue),
    email: new FormControl('', [Validators.required, Validators.email]),
  },
  {
    validators: MustMatch('password', 'confirmpassword')
  });

  

  get f(){

    return this.form.controls;

  }

  

  submit(){

    console.log(this.form.value);

  }

}
