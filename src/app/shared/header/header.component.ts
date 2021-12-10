import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  public imgUrl = '';
  public nombre = '';
  public email = '';

  constructor(private usurioService: UsuarioService) { 

    this.imgUrl = usurioService.usuario.imageUrl;
    this.nombre = usurioService.usuario.nombre;
    this.email = usurioService.usuario.email;
  }

  logout(){
    this.usurioService.logout();
  }
}
