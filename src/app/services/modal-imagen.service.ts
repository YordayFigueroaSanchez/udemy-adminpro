import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalImagenService {

  private _ocultarModal: boolean = true;

  constructor() { }

  get ocultarModal(){
    return this._ocultarModal;
  }

  cerrarModal(){
    this._ocultarModal = true;
  }

  abrirModal(){
    this._ocultarModal = false;
  }
}
