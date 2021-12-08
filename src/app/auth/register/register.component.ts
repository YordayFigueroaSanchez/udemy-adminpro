import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
})
export class RegisterComponent {

  public formSubnitted = false;

  public registerForm = this.fb.group({
    nombre : ['Yadroy', Validators.required],
    email : ['yfsancheztest100@gmail.com', Validators.required],
    password : ['123456', Validators.required],
    password2 : ['123456', Validators.required],
    terminos : [false, Validators.required],
  });
  constructor(private fb: FormBuilder) { }

  
  crearUsuario(){
    console.log(this.registerForm.value);
    this.formSubnitted = true;  
  }

  campoNoValido(campo : string):boolean {
    if (this.registerForm.get(campo).invalid && this.formSubnitted) {
      return true;
    } else {
      return false;
    }
  }

}
