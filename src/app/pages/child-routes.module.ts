import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { HospitalesComponent } from './mantenimientos/hospitales/hospitales.component';
import { MedicosComponent } from './mantenimientos/medicos/medicos.component';
import { MedicoComponent } from './mantenimientos/medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

import { AdminGuard } from "../guards/admin.guard";

const childRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'account-settings', component: AccountSettingsComponent },
  { path: 'buscar/:termino', component: BusquedaComponent , data:{    titulo: "Mantenimiento de Medicos"} },
  { path: 'grafica1', component: Grafica1Component },
  { path: 'progress', component: ProgressComponent },
  { path: 'perfil', component: PerfilComponent },

  //mantenimientos
  { path: 'hospitales', component: HospitalesComponent, data:{    titulo: "Mantenimiento de Hospitales"} },
  { path: 'medicos', component: MedicosComponent, data:{    titulo: "Mantenimiento de Medicos"} },
  { path: 'medico/:id', component: MedicoComponent, data:{    titulo: "Mantenimiento de Medico"} },
  { path: 'usuarios', canActivate:[AdminGuard], component: UsuariosComponent, data:{    titulo: "Mantenimiento de Usuarios"} },
]


@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
    exports: [ RouterModule ]
})
export class ChildRoutesModule { }
