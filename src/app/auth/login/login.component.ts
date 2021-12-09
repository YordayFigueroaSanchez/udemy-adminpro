import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent {

  public loginForm = this.fb.group({
    email : ['yfsancheztest100@gmail.com', [Validators.required, Validators.email]],
    password : ['123456', Validators.required],
    remember : [false],
  });

  constructor( private router: Router,
                private fb: FormBuilder,
                private usuarioService: UsuarioService ) { }

  
  login() {
    console.log(this.loginForm.value);
    
    this.usuarioService.login(this.loginForm.value)
      .subscribe( resp => {
        console.log("usuario creado");
        console.log(resp);
        
      },(err) => {
        //si error
        Swal.fire('Error',err.error.msg);
      });

    //this.router.navigateByUrl('/');
  }

}
