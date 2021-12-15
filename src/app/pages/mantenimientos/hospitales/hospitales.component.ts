import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Hospital } from 'src/app/models/hospital.model';
import { HospitalService } from "src/app/services/hospital.service";
import { ModalImagenService } from 'src/app/services/modal-imagen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: [
  ]
})
export class HospitalesComponent implements OnInit, OnDestroy {

  public hospitales:  Hospital[] = [];
  public cargando: boolean;

  public imagenSubs: Subscription;

  constructor(private hospitalService:  HospitalService,
              private modalService: ModalImagenService) { }
  ngOnDestroy(): void {
    this.imagenSubs.unsubscribe();
  }

  ngOnInit(): void {

   this.cargarHospitales();

   this.imagenSubs = this.modalService.nuevaImagen
    .pipe(
      delay(1000)
    )
    .subscribe(img => {
      
      console.log(img);
      this.cargarHospitales()

    });
  }

  cargarHospitales(){
    this.cargando = true;
    this.hospitalService.cargarHospitales()
      .subscribe( hospitalesResponse => {
        console.log(hospitalesResponse);

        this.cargando = false;
        this.hospitales = hospitalesResponse;
        
      })
  }

  guardarHospital(hospitalLocal: Hospital){
    console.log(hospitalLocal);
    this.hospitalService.actualizarHospital(hospitalLocal._id, hospitalLocal.nombre)
            .subscribe( resp => {
              Swal.fire('Actualizado',hospitalLocal.nombre,'success')
            })
    
  }

  eliminarHospital(hospitalLocal: Hospital){
    console.log(hospitalLocal);
    this.hospitalService.borrarHospital(hospitalLocal._id)
            .subscribe( resp => {
              this.cargarHospitales();
              Swal.fire('Borrado',hospitalLocal.nombre,'success')
            })
    
  }

  async abrirSweetAlert(){
    const { value} = await Swal.fire<string>({
      input: 'text',
      text: 'Ingrese el nombre del hospital',
      title: 'Crear Hospital',
      inputPlaceholder: 'Nombre del hospital',
      showCancelButton: true
    })
    
    if (value.length > 0) {
      this.hospitalService.crearHospital(value)
            .subscribe( (resp: any) => {
              this.hospitales.push(resp.hospital)
            })
    }
    
  }

  abrirModal(hospitalTemp: Hospital){
    this.modalService.abrirModal('hospital', hospitalTemp._id, hospitalTemp.img);
    console.log(hospitalTemp);
  }

}
