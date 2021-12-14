import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { BusquedasService } from 'src/app/services/busquedas.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  public totalUsuarios: number = 0;
  public usuarios:  Usuario[] = [];
  public desde: number = 0;
  public cargando:  boolean = true;

  constructor(private usuarioService:UsuarioService,
              private busquedasService:BusquedasService) { }

  ngOnInit(): void {
    this.cambiarUsuarios();
  }

  cambiarUsuarios(){
    this.cargando = true;
    this.usuarioService.cargarUsuarios(this.desde)
      .subscribe( ({total,usuarios}) => {
        this.totalUsuarios =  total;
        this.usuarios   = usuarios;
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

  buscar( termino ){
    this.busquedasService.buscar('usuarios',termino).subscribe( resp => {  
      console.log(resp);
    });
  }

}
