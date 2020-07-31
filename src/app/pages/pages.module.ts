import { NgModule } from "@angular/core";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
  declarations:[
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Grafica1Component, IncrementadorComponent, GraficoDonaComponent, AccountSettingsComponent
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafica1Component
  ],
  imports:[
    SharedModule, PAGES_ROUTES, FormsModule, ChartsModule
  ]
})
export class PagesModule { }
