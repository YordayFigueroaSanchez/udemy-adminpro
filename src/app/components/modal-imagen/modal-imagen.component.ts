import { Component, OnInit } from '@angular/core';

import { ModalImagenService } from 'src/app/services/modal-imagen.service';

@Component({
  selector: 'app-modal-imagen',
  templateUrl: './modal-imagen.component.html',
  styles: [
  ]
})
export class ModalImagenComponent implements OnInit {

  public imagenASubir: File;
  public imagenTemp: any;

  
  constructor(public modalservice: ModalImagenService) { }

  ngOnInit(): void {
  }

  cerrarModal(){
    this.modalservice.cerrarModal();
    this.imagenTemp = null;
  }

  cambiarImagen(file: File){
    
    this.imagenASubir = file;

    if (!file) {
      return this.imagenTemp = null;
    }

    const reader = new FileReader();
    reader.readAsDataURL( file  );

    reader.onloadend = () => {
      console.log(reader.result);
      this.imagenTemp = reader.result;
      
    }
    
  }

}
