import { Component, OnInit } from '@angular/core';
import { ChartService } from '../services/chart.service';
import { OperationService } from '../services/ms_operations/operation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public DATA: any = ['500', '600', '700', '800', '700', '800', '600', '659', '600', '650', '550', '547']
  public SMALL_DATA: any = ['500', '600', '700', '800']

  public OPERATION_TYPE_DATA: any
  public OPERATION_TYPE_LABEL: any


  dataObtainedClassifyOperationsByType;
  TotalNumberOfOperations


  constructor(private chartService: ChartService, private operationService: OperationService) { }

  ngOnInit(): void {


    this.operationService.getClassifyOperationsByType().subscribe(res=>{
      this.dataObtainedClassifyOperationsByType = res;
      console.log(this.dataObtainedClassifyOperationsByType)
      this.TotalNumberOfOperations = this.sumArray(this.dataObtainedClassifyOperationsByType)
      this.OPERATION_TYPE_DATA = this.getNumbersFromArray(this.dataObtainedClassifyOperationsByType)
      this.OPERATION_TYPE_LABEL = this.getLabelsFromArray(this.dataObtainedClassifyOperationsByType)


      console.log(this.OPERATION_TYPE_DATA) 
      this.chartService.createBarChart('barchart', this.OPERATION_TYPE_DATA, this.OPERATION_TYPE_LABEL, 1000)
    })

    this.chartService.createLineChart('linechart',this.DATA)
    
    
   // this.chartService.createBarChart('barchart2', this.SMALL_DATA)
    //this.chartService.createBarChart('barchart3', this.SMALL_DATA)

  

  }


  sumArray(array){
    let sum = array.reduce((total, current) => total + current[1], 0);
    return sum;
  }

  getNumbersFromArray(array): Object {
    let arrayOfValues: any[] = new Array(0);
    
    array.forEach((value) => {
    
      arrayOfValues.push(value[1]);
      
    });
 
    return  arrayOfValues;
  }


  getLabelsFromArray(array): Object {

    let arrayOfLabels: any[] = new Array(0);
    array.forEach((value) => {
      arrayOfLabels.push(value[0]);
  

    });
   
    return arrayOfLabels;
  }

}
