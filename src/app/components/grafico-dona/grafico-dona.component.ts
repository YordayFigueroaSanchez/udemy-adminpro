import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html'
})
export class GraficoDonaComponent implements OnInit {

  @Input() pieChartLabels: string[] = [];
  @Input() pieChartData: number[] = [];
  @Input() pieChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
