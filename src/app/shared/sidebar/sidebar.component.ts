import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  // menuItems: any[];
  public usuario: Usuario;

  constructor( public sidebarService: SidebarService,
                private usurioService: UsuarioService ) {
    // this.menuItems = sidebarService.menu;
    
    // console.log(usurioService.usuario);
    
    this.usuario = usurioService.usuario;
    
  }

  ngOnInit(): void {
  }

}
