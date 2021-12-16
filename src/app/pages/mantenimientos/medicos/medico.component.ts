import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hospital } from 'src/app/models/hospital.model';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: [
  ]
})
export class MedicoComponent implements OnInit {

  public medicoForm:  FormGroup;

  public hospitales: Hospital[] = [];

  constructor(private fb: FormBuilder,
              private hospitalService: HospitalService) { }

  ngOnInit(): void {

    this.medicoForm = this.fb.group({
      nombre: ['Yofsrksdy', Validators.required],
      hospital: ['',Validators.required]
    });

    this.listaHospitales();
  }


  guardarMedico(){
    console.log(this.medicoForm.value);
    
  }

  listaHospitales(){
    this.hospitalService.cargarHospitales()
      .subscribe((hospitalesResponse)=>{
        console.log(hospitalesResponse);
        this.hospitales = hospitalesResponse;
        
      })
  }


}
