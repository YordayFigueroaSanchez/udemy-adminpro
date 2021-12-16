import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  public usuario: Usuario;

  constructor(private usurioService: UsuarioService,
              private router:Router) { 

    this.usuario = usurioService.usuario;
    
  }

  logout(){
    this.usurioService.logout();
  }

  buscar(txtTermino: string){
    // console.log(txtTermino);
    this.router.navigateByUrl('/dashboard/buscar/' + txtTermino)
    
  }
}
