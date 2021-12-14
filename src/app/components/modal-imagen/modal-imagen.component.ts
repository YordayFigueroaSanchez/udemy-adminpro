import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';

import { ModalImagenService } from 'src/app/services/modal-imagen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-imagen',
  templateUrl: './modal-imagen.component.html',
  styles: [
  ]
})
export class ModalImagenComponent implements OnInit {

  public imagenASubir: File;
  public imagenTemp: any;

  
  constructor(public modalservice: ModalImagenService,
              public fileUploadService: FileUploadService) { }

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

  subirImagen(){
    const uid = this.modalservice.id;
    const tipo = this.modalservice.tipo;
    this.fileUploadService.actualizarFoto(this.imagenASubir, tipo, uid)
    .then( img => {

      console.log(img)
      Swal.fire('Imagen', 'cambios fueron realizados','success');
      this.cerrarModal();
      this.modalservice.nuevaImagen.emit(img);

    }
    ).catch( err => {

      console.log(err);
      Swal.fire('Error', 'No se subieron los cambios','error');
      
    });
  }

}
