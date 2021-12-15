import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';
import { Hospital } from '../models/hospital.model';
import { Medico } from '../models/medico.model';


const base_url = environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class BusquedasService {


  constructor(private http: HttpClient,) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }

  buscar( tipo:  'usuarios'|'hospitales'|'medicos',
          termino:  string) {

    //http://localhost:3000/api/busqueda/coleccion/hospitales/s
    const url = `${ base_url }/busqueda/coleccion/${ tipo }/${termino}`;
    return this.http.get(url, this.headers)
            .pipe(
              map(  (resp:  any) => {
                switch (tipo) {
                  case 'usuarios':
                    return this.transformarUsuario(resp.resultados)
                    break;

                    case 'hospitales':
                      return this.transformarHospital(resp.resultados)
                      break;
                
                      case 'medicos':
                        return this.transformarMedicos(resp.resultados)
                        break;

                  default:
                    return [];
                    break;
                }
              }   )
            )
  }

  private transformarUsuario(resultados: any[]):Usuario[]{
    return resultados.map( user => new Usuario(user.email,user.nombre,'',user.img,user.google,user.role,user.uid));
  }

  private transformarHospital(resultados: any[]):Hospital[]{
    return resultados;
  }

  private transformarMedicos(resultados: any[]):Medico[]{
    return resultados;
  }

}
