import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    console.log(this.perfilForm.value);
    this.usuarioService.actualizarPerfil(this.perfilForm.value)
      .subscribe( resp => {

        const {nombre, email} = this.perfilForm.value;
        this.usuario.nombre = nombre;
        this.usuario.email = email;
        console.log(resp);
        
      });

    
  }

  cambiarImagen(file: File){
    console.log(file);
    this.imagenASubir = file;
    
  }

  subirImagen(){
    this.fileUploadService.actualizarFoto(this.imagenASubir, 'usuario', this.usuario.uid)
    .then( img => {
      this.usuario.img = img
      console.log(img)
    }
    );
  }

}
