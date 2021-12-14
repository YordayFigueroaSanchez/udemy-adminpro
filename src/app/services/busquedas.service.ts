import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


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
              map(  (resp:  any) => resp.resultados   )
            )
  }

}
