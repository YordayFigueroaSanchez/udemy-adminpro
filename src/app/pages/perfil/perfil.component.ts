import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnInit {

  public perfilForm: FormGroup;

  constructor(private fb:FormBuilder,
              private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.perfilForm = this.fb.group({
      nombre: ['abc', Validators.required],
      email: ['abc@abc', [Validators.required, Validators.email]],
    });
  }

  actualizarPerfil(){
    console.log(this.perfilForm.value);
    this.usuarioService.actualizarPerfil(this.perfilForm.value)
      .subscribe( resp => {
        console.log(resp);
        
      });

    
  }

}
