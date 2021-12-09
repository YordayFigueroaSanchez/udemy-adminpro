import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RegisterForm } from '../interfaces/register_form.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient) { }

  crearUsuario (formData: RegisterForm){
    console.log("usuario creado");
    
  }
}
