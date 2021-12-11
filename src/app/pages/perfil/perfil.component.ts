import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnInit {

  public perfilForm: FormGroup;
  public usuario:  Usuario;
  public imagenASubir: File;
  public imagenTemp: any;

  constructor(private fb:FormBuilder,
              private usuarioService:UsuarioService,
              private fileUploadService:FileUploadService) { 
                this.usuario = usuarioService.usuario;
              }

  ngOnInit(): void {
    this.perfilForm = this.fb.group({
      nombre: [this.usuario.nombre, Validators.required],
      email: [this.usuario.email, [Validators.required, Validators.email]],
    });
  }

  actualizarPerfil(){
    // console.log(this.perfilForm.value);
    this.usuarioService.actualizarPerfil(this.perfilForm.value)
      .subscribe( resp => {

        const {nombre, email} = this.perfilForm.value;
        this.usuario.nombre = nombre;
        this.usuario.email = email;
        // console.log(resp);
        Swal.fire('Guardado', 'cambios fueron realizados','success');
        
      },(err)=>{

        Swal.fire('Error', err.error.msg,'error');
      });

    
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
    this.fileUploadService.actualizarFoto(this.imagenASubir, 'usuario', this.usuario.uid)
    .then( img => {
      this.usuario.img = img
      console.log(img)
      Swal.fire('Imagen', 'cambios fueron realizados','success');
    }
    );
  }

}
