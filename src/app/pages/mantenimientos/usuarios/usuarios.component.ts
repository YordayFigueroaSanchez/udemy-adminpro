import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { BusquedasService } from 'src/app/services/busquedas.service';
import Swal from 'sweetalert2';
import { ModalImagenService } from 'src/app/services/modal-imagen.service';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit, OnDestroy {

  public totalUsuarios: number = 0;
  public usuarios:  Usuario[] = [];
  public usuariosTemp:  Usuario[] = [];
  public desde: number = 0;
  public cargando:  boolean = true;

  public imagenSubs: Subscription;

  constructor(private usuarioService:UsuarioService,
              private busquedasService:BusquedasService,
              private modalService: ModalImagenService) { }
  
  ngOnDestroy(): void {
    this.imagenSubs.unsubscribe();
  }

  ngOnInit(): void {
    this.cambiarUsuarios();

    this.imagenSubs = this.modalService.nuevaImagen
    .pipe(
      delay(1000)
    )
    .subscribe(img => {
      
      console.log(img);
      this.cambiarUsuarios()

    });
  }

  cambiarUsuarios(){
    this.cargando = true;
    this.usuarioService.cargarUsuarios(this.desde)
      .subscribe( ({total,usuarios}) => {
        this.totalUsuarios =  total;
        this.usuarios   = usuarios;
        this.usuariosTemp   = usuarios;
        this.cargando = false;
      });
  }

  cambiarPagina(valor:  number){
    this.desde += valor;
    console.log(this.desde);
    

    if (this.desde < 0) {
      this.desde = 0;
    } else if (this.desde >= this.totalUsuarios) {
      this.desde -= valor;
    }

    this.cambiarUsuarios();
  }

  buscar( termino:  string ){
    if (  termino.length === 0 ) {
      this.usuarios = this.usuariosTemp;
      return;
    }
    this.busquedasService.buscar('usuarios',termino).subscribe( resp => {  
      console.log(resp);
      this.usuarios = resp;
    });
  }

  eliminar(usuario: Usuario){
    if (usuario.uid === this.usuarioService.uid) {
      return Swal.fire('Error','No puede eliminarse a si mismo','error');
    }

    Swal.fire({
      title: '¿Borrar usuario?',
      text: `Esta por borrar el usuario ${usuario.nombre}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si borrar !'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.eliminar(usuario)
        .subscribe(resp => {
          
          this.cambiarUsuarios();

          Swal.fire(
            'Usuario eliminado!',
            `El usuario ${usuario.nombre} fue eliminado.`,
            'success'
          )

        })
      }
    })
    
  }

  cambiarRol(usuario: Usuario){
    this.usuarioService.actualizarRol(usuario)
    .subscribe( resp => {
      console.log(resp);
      
    });
    console.log(usuario);
    
  }

  abrirModal(usuarioLocal: Usuario){
    this.modalService.abrirModal('usuario', usuarioLocal.uid, usuarioLocal.img);
    console.log(usuarioLocal);
    
  }

}
