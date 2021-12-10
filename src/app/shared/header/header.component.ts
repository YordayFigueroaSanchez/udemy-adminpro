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

  constructor(private usurioService: UsuarioService) { 
    this.imgUrl = usurioService.usuario.imageUrl;
  }

  logout(){
    this.usurioService.logout();
  }
}
