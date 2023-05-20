import { Component, OnInit } from '@angular/core';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public DATA: any = ['500', '600', '700', '800', '700', '800', '600', '659', '600', '650', '550', '547']
  public SMALL_DATA: any = ['500', '600', '700', '800']



  constructor(private chartService: ChartService) { }

  ngOnInit(): void {

    this.chartService.createLineChart('linechart',this.DATA)
    this.chartService.createBarChart('barchart', this.SMALL_DATA)
    this.chartService.createBarChart('barchart2', this.SMALL_DATA)
    this.chartService.createBarChart('barchart3', this.SMALL_DATA)



  }



}
