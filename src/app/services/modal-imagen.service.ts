import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ModalImagenService {

  private _ocultarModal: boolean = true;

  public tipo: 'usuario' | 'medico' | 'hospital';
  public  id: string;
  public  img: string;

  public nuevaImagen: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  get ocultarModal(){
    return this._ocultarModal;
  }

  cerrarModal(){
    this._ocultarModal = true;
  }

  abrirModal(
    tipo: 'usuario' | 'medico' | 'hospital',
    id: string,
    img: string = 'no-image'
  ){
    this._ocultarModal = false;
    this.tipo = tipo;
    this.id = id;
    
    //http://localhost:3000/api/upload/usuario/2d71f22a-0975-42c9-971d-e76dd669c6ea8.png
    if (img.includes('http')) {
      this.img = img;
    } else {
      this.img = `${base_url}/upload/${tipo}/${img}`
    }
    
  }
}
