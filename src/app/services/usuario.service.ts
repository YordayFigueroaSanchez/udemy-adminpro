import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
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
    
    return this.http.post(`${ base_url }/usuarios`, formData);
    
  }

  login (formData: LoginForm){
    
    return this.http.post(`${ base_url }/login`, formData);
    
  }
}
