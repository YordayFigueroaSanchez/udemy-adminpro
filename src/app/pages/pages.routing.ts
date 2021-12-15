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

const routes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'grafica1', component: Grafica1Component },
            { path: 'account-settings', component: AccountSettingsComponent },
            { path: 'perfil', component: PerfilComponent },

            //mantenimientos
            { path: 'usuarios', component: UsuariosComponent, data:{    titulo: "Mantenimiento de Usuarios"} },
            { path: 'hospitales', component: HospitalesComponent, data:{    titulo: "Mantenimiento de Hospitales"} },
            { path: 'medicos', component: MedicosComponent, data:{    titulo: "Mantenimiento de Medicos"} },
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


