import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/models/hospital.model';
import { HospitalService } from "src/app/services/hospital.service";

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: [
  ]
})
export class HospitalesComponent implements OnInit {

  public hospitales:  Hospital[] = [];
  public cargando: boolean;

  constructor(private hospitalService:  HospitalService) { }

  ngOnInit(): void {

   this.cargarHospitales();
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

}
