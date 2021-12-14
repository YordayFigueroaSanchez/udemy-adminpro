import { Component, OnInit } from '@angular/core';

import { ModalImagenService } from 'src/app/services/modal-imagen.service';

@Component({
  selector: 'app-modal-imagen',
  templateUrl: './modal-imagen.component.html',
  styles: [
  ]
})
export class ModalImagenComponent implements OnInit {

  
  constructor(public modalservice: ModalImagenService) { }

  ngOnInit(): void {
  }

  cerrarModal(){
    this.modalservice.cerrarModal();
  }

}
