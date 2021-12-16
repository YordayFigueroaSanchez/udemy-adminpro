import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { Hospital } from 'src/app/models/hospital.model';
import { Medico } from 'src/app/models/medico.model';

import { HospitalService } from 'src/app/services/hospital.service';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: [
  ]
})
export class MedicoComponent implements OnInit {

  public medicoForm:  FormGroup;

  public hospitales: Hospital[] = [];
  public hospitalSeleccionado: Hospital;
  public medicoSeleccionado: Medico;

  constructor(private fb: FormBuilder,
              private hospitalService: HospitalService,
              private medicoService: MedicoService,
              private router: Router,
              private activatedRouted: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRouted.params
      .subscribe((  {id}  )=>{

        console.log(id);
        this.cargarMedico(id);
        
      })

    this.medicoForm = this.fb.group({
      nombre: ['', Validators.required],
      hospital: ['',Validators.required]
    });

    this.listaHospitales();

    this.medicoForm.get('hospital').valueChanges
      .subscribe((hospitalId)=>{
         this.hospitalSeleccionado = this.hospitales.find(h => h._id === hospitalId) 
      })
  }

  private cargarMedico(uid: string){
    this.medicoService.getMedicoById(uid)
      .subscribe((  medico  )=>{

        console.log(medico);
        this.medicoSeleccionado = medico;
        
        const { nombre, hospital:{_id}  } = medico;
        this.medicoForm.setValue({nombre, hospital:_id})

      })
  }


  guardarMedico(){
    const { nombre  } = this.medicoForm.value;
    
    this.medicoService.crearMedico(this.medicoForm.value)
      .subscribe((  resp: any  )=>{
        console.log(resp);

        Swal.fire('Creado', nombre + ' creado correctamente','success')
        this.router.navigateByUrl('/dashboard/medico/'+resp.medico._id)
      })
  }

  listaHospitales(){
    this.hospitalService.cargarHospitales()
      .subscribe((hospitalesResponse)=>{
        // console.log(hospitalesResponse);
        this.hospitales = hospitalesResponse;
        
      })
  }


}
