import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Medico } from 'src/app/models/medico.model';

import { MedicoService } from "src/app/services/medico.service";
import { ModalImagenService } from 'src/app/services/modal-imagen.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: [
  ]
})
export class MedicosComponent implements OnInit {

  public medicos:  Medico[] = [];
  public cargando: boolean;

  public imagenSubs: Subscription;

  constructor(private medicoService: MedicoService,
              private modalService: ModalImagenService) { }

  ngOnInit(): void {
    this.cargarMedicos();
  }


  cargarMedicos(){
    this.cargando = true;
    this.medicoService.cargarMedicos()
      .subscribe( medicosResponse => {
        console.log(medicosResponse);

        this.cargando = false;
        this.medicos = medicosResponse;
        
      })
  }

  abrirModal(medicoLocal: Medico){
    this.modalService.abrirModal('medico', medicoLocal._id, medicoLocal.img);
  }

}
