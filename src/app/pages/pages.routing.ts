import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from "../guards/auth.guard";

import { PagesComponent } from './pages.component';
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

const routes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
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
            { path: 'usuarios', component: UsuariosComponent, data:{    titulo: "Mantenimiento de Usuarios"} },
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


