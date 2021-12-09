import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
})
export class RegisterComponent {

  public formSubnitted = false;

  public registerForm = this.fb.group({
    nombre : ['Yadroy', Validators.required],
    email : ['yfsancheztest100@gmail.com', [Validators.required, Validators.email]],
    password : ['123456', Validators.required],
    password2 : ['123456', Validators.required],
    terminos : [true, Validators.required],
  },{
    validators: this.passwordsIquals('password', 'password2')
  });

  constructor(private fb: FormBuilder,
              private usuarioService: UsuarioService,
              private router: Router) { }

  
  crearUsuario(){
    console.log(this.registerForm.value);
    this.formSubnitted = true;  

    if (this.registerForm.invalid) {
      return;
      
    }
    this.usuarioService.crearUsuario(this.registerForm.value)
      .subscribe( resp => {
        
        // redireccionar al dashboard
        this.router.navigateByUrl('/');
        
      },(err) => {
        //si error
        Swal.fire('Error',err.error.msg);
      });
  }

  campoNoValido(campo : string):boolean {
    if (this.registerForm.get(campo).invalid && this.formSubnitted) {
      return true;
    } else {
      return false;
    }
  }

  aceptaTerminos():boolean {
    return !this.registerForm.get('terminos').value && this.formSubnitted
  }

  contrasennaNoValidas():boolean{
    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;
    if ((pass1 !== pass2) && this.formSubnitted) {
      return true;
    } else {
      return false;
    }
  }

  passwordsIquals(pass1: string, pass2: string){
    return (formGroup: FormGroup) =>{
      const pass1Control = formGroup.get(pass1);
      const pass2Control = formGroup.get(pass2);

      if (pass1Control.value === pass2Control.value) {
        pass2Control.setErrors(null)
      } else {
        pass2Control.setErrors({noEsIgual: true})
      }
    }
  }

}
