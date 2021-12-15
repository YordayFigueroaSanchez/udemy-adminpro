import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

import { RegisterForm } from '../interfaces/register_form.interfaces';
import { LoginForm } from '../interfaces/login_form.interfaces';
import { CargarUsuario } from '../interfaces/cargar-usuarios.interfaces';
import { environment } from 'src/environments/environment';
import { Usuario } from "../models/usuario.model";

const base_url = environment.base_url;

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public auth2: any;
  public usuario: Usuario;

  constructor( private http: HttpClient,
                private router: Router,
                private ngZone:NgZone) { 
                  this.googleInit();
                }

  
  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get uid(): string {
    return this.usuario.uid || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }

  crearUsuario (formData: RegisterForm){
    
    return this.http.post(`${ base_url }/usuarios`, formData)
          .pipe(
            tap((resp: any) => {
              localStorage.setItem('token',resp.token)  
            })
          )
  }

  actualizarPerfil( data: { email: string, nombre: string, role: string }){
    data = {
      ...data,
      role: this.usuario.role
    }
    return this.http.put(`${ base_url }/usuarios/${ this.uid }`, data, this.headers)
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

  validarToken(): Observable<boolean>{
    // const token = localStorage.getItem('token') || '';
    return this.http.get(`${ base_url }/login/renew`, { 
      headers: {
        'x-token': this.token
      }
     } ).pipe(
       map(( resp:any )=>{
        //  console.log(resp);
         const {email, google, nombre, role, img = '', uid} = resp.usuario;
         this.usuario = new Usuario(email, nombre, '', img, google, role, uid);
         localStorage.setItem('token',resp.token)
         return true;
       }),
       catchError(  error => of(false))
       
     )

  }

  logout(){
    localStorage.removeItem('token');
    
    this.auth2.signOut().then( () => {
      this.ngZone.run(() => {
        
        this.router.navigateByUrl('/login');
        // console.log('User signed out.');

      });
    });


  }

  googleInit(){

    return new Promise<void>( resolve => {

      gapi.load('auth2', () => {
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        this.auth2 = gapi.auth2.init({
          client_id: '370495668372-cg4v19vkci7evegl47gd5inqdv4hrm9m.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          
        });
        
        resolve();
      });

    });
  }

  cargarUsuarios(desde: number = 0){
    const url = `${ base_url }/usuarios?desde=${ desde }`;
    return this.http.get<CargarUsuario>(url, this.headers)
                  .pipe(
                    // delay(5000),
                    map(resp => {
                      // console.log(resp);
                      
                      const usuarios = resp.usuarios.map( user => new Usuario(user.email,user.nombre,'',user.img,user.google,user.role,user.uid));
                      return {
                        total:  resp.total,
                        usuarios 
                      };
                    })
                  );
                
  }

  eliminar(usuarioBorar: Usuario){
    // console.log(usuarioBorar);
    const url = `${ base_url }/usuarios/${ usuarioBorar.uid }`;
    // console.log(url);
    
    return this.http.delete(url, this.headers)
    
  }

  actualizarRol( usuarioLocal: Usuario){
    
    return this.http.put(`${ base_url }/usuarios/${ usuarioLocal.uid }`, usuarioLocal, this.headers)
  }
}
