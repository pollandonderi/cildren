import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login0',
  templateUrl: './login0.component.html',
  styleUrls: ['./login0.component.scss']
})
export class Login0Component {
loginForm: FormGroup = new FormGroup({

})
constructor(private fb : FormBuilder ){
  this.loginForm = fb.group({
    yourName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    yourPassword: new FormControl<string>('', [Validators.required]),
  })
}
get f(){
  return this.loginForm.controls;
}
submit(){}
ngOnInit(){
}
}

