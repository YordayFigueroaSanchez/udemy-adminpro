import { NgModule } from "@angular/core";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
  declarations:[
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Grafica1Component
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafica1Component
  ],
  imports:[
    SharedModule, PAGES_ROUTES
  ]
})
export class PagesModule { }
