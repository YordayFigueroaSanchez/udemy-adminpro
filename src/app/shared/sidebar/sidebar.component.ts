import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: any[];
  public imgUrl = '';
  public nombre = '';

  constructor( private sidebarService: SidebarService,
                private usurioService: UsuarioService ) {
    this.menuItems = sidebarService.menu;
    
    // console.log(usurioService.usuario);
    
    this.imgUrl = usurioService.usuario.imageUrl;
    this.nombre = usurioService.usuario.nombre;
  }

  ngOnInit(): void {
  }

}
