import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators';

import { RegisterForm } from '../interfaces/register_form.interfaces';
import { LoginForm } from '../interfaces/login_form.interfaces';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor( private http: HttpClient) { }

  crearUsuario (formData: RegisterForm){
    
    return this.http.post(`${ base_url }/usuarios`, formData)
          .pipe(
            tap((resp: any) => {
              localStorage.setItem('token',resp.token)  
            })
          )
  }

  login (formData: LoginForm){
    
    return this.http.post(`${ base_url }/login`, formData)
          .pipe(
            tap((resp: any) => {
              localStorage.setItem('token',resp.token)  
            })
          )
  }

  loginGoogle (token){
    
    return this.http.post(`${ base_url }/login/google`, { token } )
          .pipe(
            tap((resp: any) => {
              console.log(resp);
              
              localStorage.setItem('token',resp.token)  
            })
          )
  }

  validarToken(){
    const token = localStorage.getItem('token') || '';
    return this.http.get(`${ base_url }/login/renew`, { 
      headers: {
        'x-token': token
      }
     } )

  }
}
