import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from 'src/app/_helpers/ConfirmValidator';

@Component({
  selector: 'app-register0',
  templateUrl: './register0.component.html',
  styleUrls: ['./register0.component.scss']
})
export class Register0Component {
  passwordForm: FormGroup = new FormGroup({
   
  });
    submitted = false;
    constructor(private fb: FormBuilder) {
      this.passwordForm = fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      acceptTerms: new FormControl(false, Validators.requiredTrue),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
  confirm_password: new FormControl('', [Validators.required]),
  password1: new FormControl<string>('', [Validators.required]),
  password2: new FormControl<string>('', [Validators.required])
  
    }, 
    { validators: confirmPasswordValidator })
  
  }
  
    get f(){
  
      return this.passwordForm.controls;
  
    }
  
    
  
    submit(){
  
      console.log(this.passwordForm.value);
      if (this.passwordForm.invalid) {
        return;
    }
  
    }
}
