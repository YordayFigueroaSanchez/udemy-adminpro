import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { Medico } from 'src/app/models/medico.model';

import { BusquedasService } from 'src/app/services/busquedas.service';
import { MedicoService } from "src/app/services/medico.service";
import { ModalImagenService } from 'src/app/services/modal-imagen.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: [
  ]
})
export class MedicosComponent implements OnInit, OnDestroy {

  public medicos:  Medico[] = [];
  public cargando: boolean;

  public imagenSubs: Subscription;

  constructor(private medicoService: MedicoService,
              private modalService: ModalImagenService,
              private busquedasService:BusquedasService) { }
  
  
  ngOnDestroy(): void {
    this.imagenSubs.unsubscribe();
  }

  ngOnInit(): void {
    this.cargarMedicos();

    this.imagenSubs = this.modalService.nuevaImagen
    .pipe(
      delay(1000)
    )
    .subscribe(img => {
      
      console.log(img);
      this.cargarMedicos()

    });
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

  buscar(termino: string){
    console.log(termino);
    if (  termino.length === 0 ) {
      // this.usuarios = this.usuariosTemp;
      this.cargarMedicos();
      return;
    }
    this.busquedasService.buscar('medicos',termino).subscribe( resp => {  
      console.log(resp);
      this.medicos = resp;
    });
    
  }


  eliminar(medico: Medico){
    Swal.fire({
      title: '¿Borrar medico?',
      text: `Esta por borrar el medico ${medico.nombre}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si borrar !'
    }).then((result) => {
      if (result.isConfirmed) {
        this.medicoService.borrarMedico(medico._id)
        .subscribe(resp => {
          
          this.cargarMedicos();

          Swal.fire(
            'Usuario eliminado!',
            `El medico ${medico.nombre} fue eliminado.`,
            'success'
          )

        })
      }
    })
    
  }

  

}
