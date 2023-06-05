import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ChartService } from '../services/chart.service';
import { CommonService } from '../services/common.service';
import { BranchService } from '../services/ms_clients/branch.service';
import { PartnerService } from '../services/ms_clients/partner.service';
import { OperationService } from '../services/ms_operations/operation.service';

export interface Month {
  month: number;
  nameMonth: string;

}

@Component({
  selector: 'app-h22-report',
  templateUrl: './h22-report.component.html',
  styleUrls: ['./h22-report.component.scss']
})
export class H22ReportComponent implements OnInit {

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  dataSource = new MatTableDataSource();


  dataObtainedBranches;
  listOfBranches;
  dataObtainedKpi;

  //kpi data
  numberOfOperation = '0';
  tauxDeRejet = '0';
  montantRetrait = '0';
  montantVersement = '0';
  choosenPartner;

  //report infos
  partnerReport
  branchReport
  

 
  //graph
  public canvas: any;
  public ctx: any;

  reportDataObtained
  dataObtainedTableSummary
  displayedColumns: string[] = ['date', 'captureCardCount', 'interrogationCount', 'retraitCount', 'retraitMontant', 'totalOperationCount', 'transrejetCount', 'versementCount', 'versementMontant'];



  monthData: Month[] =
    [
      { month: 0, nameMonth: 'ALL' },
      { month: 1, nameMonth: 'January' },
      { month: 2, nameMonth: 'February' },
      { month: 3, nameMonth: 'March' },
      { month: 4, nameMonth: 'April' },
      { month: 5, nameMonth: 'May' },
      { month: 6, nameMonth: 'June' },
      { month: 7, nameMonth: 'July' },
      { month: 8, nameMonth: 'August' },
      { month: 9, nameMonth: 'September' },
      { month: 10, nameMonth: 'October' },
      { month: 11, nameMonth: 'Nomvember' },
      { month: 12, nameMonth: 'December' },
    ]


  years: number[] = [];
  initialYear = 2012;

  selectedYear = new Date().getFullYear();

  //0 means all months, 1 means january and so on
  selectedMonth = "0";

  processing = false;
  dataObtainedPartners: any;
  listOfPartners: any;

  searchKey;


  constructor(private commonService: CommonService, private chartService: ChartService, public dialog: MatDialog, private operationService: OperationService, private partnerService: PartnerService,
    private branchService: BranchService) {
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < (currentYear - this.initialYear); i++) {
      this.years.push(currentYear - i);
    }

  }



 

  ngOnInit() {

    this.partnerService.getPartners().subscribe(res => {
      this.dataObtainedPartners = res
      console.log(this.dataObtainedPartners)
      this.listOfPartners = this.dataObtainedPartners.slice().reverse()
    })


    this.branchService.getBranches().subscribe(res => {
      this.dataObtainedBranches = res
      console.log(this.dataObtainedBranches.branchList)


      this.listOfBranches = this.dataObtainedBranches.branchList;
    })

    const reportRequest = {
      branch: 'ALL',
      year: this.selectedYear,
      month: '0',
    }

    this.operationService.getKpiData(reportRequest).subscribe(res => {
      console.log("rear")
      this.dataObtainedKpi = res;

      this.numberOfOperation = this.chartService.formatLargeNumber(this.dataObtainedKpi.numberOfOperation);
      this.tauxDeRejet = this.chartService.reduceDecimal(this.dataObtainedKpi.tauxDeRejet);
      this.montantRetrait = this.chartService.formatLargeNumber(this.dataObtainedKpi.montantRetrait);
      this.montantVersement = this.chartService.formatLargeNumber(this.dataObtainedKpi.montantVersement);

    })


  }


  refreshData() {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
   
  }


  filterBranches() {
    console.log("frtos")
    let partner = this.form.get('partner').value
    console.log(partner)
    // Filter the list of branches by the selected partner's id
    this.listOfBranches = this.dataObtainedBranches.branchList.filter(branch => branch.partner.idPartner == partner);
    let allObject = { "idBranch": "ALL", "partner": { "idPartner": "0", "namePartner": "ALL" } };

    this.listOfBranches.unshift(allObject);
    console.log(this.listOfBranches)
  }



  form = new FormGroup({

    partner: new FormControl('', [Validators.required]),
    branch: new FormControl('', [Validators.required]),
    year: new FormControl(this.selectedYear),
    month: new FormControl(this.selectedMonth),

  });

  disableForm() {
    this.form.controls['branch'].disable();
    this.form.controls['partner'].disable();
    this.form.controls['year'].disable();
    this.form.controls['month'].disable();




  }

  enableForm() {
    this.form.controls['branch'].enable();
    this.form.controls['partner'].enable();
    this.form.controls['year'].enable();
    this.form.controls['month'].enable();



  }

  get f() {

    return this.form.controls;

  }


  generateReport() {
  
    this.processing = true;
    this.disableForm()
    const reportRequest = {

      partner: this.form.get('partner').value,
      branch: this.form.get('branch').value,
      year: this.form.get('year').value,
      month: this.form.get('month').value,
    }

    //get the name of partner based on idPartner
    this.partnerReport = this.getNamePartnerFromIdPartner(this.form.get('partner').value)
    console.log(this.partnerReport)
    console.log("geiger2")
    console.log(reportRequest)
    this.operationService.getKpiData(reportRequest).subscribe(res => {
      console.log(res)
      this.dataObtainedKpi = res;
    
      this.numberOfOperation = this.chartService.formatLargeNumber(this.dataObtainedKpi.numberOfOperation);
      this.tauxDeRejet = this.chartService.reduceDecimal(this.dataObtainedKpi.tauxDeRejet);
      this.montantRetrait = this.chartService.formatLargeNumber(this.dataObtainedKpi.montantRetrait);
      this.montantVersement = this.chartService.formatLargeNumber(this.dataObtainedKpi.montantVersement);

    })



    /** get report table data */
    this.operationService.getTableSummary(reportRequest).subscribe(res => {
      this.dataObtainedTableSummary = res;



      console.log("crinjy2")
      this.dataSource = new MatTableDataSource(this.dataObtainedTableSummary);
      console.log("get it2")
      console.log(res)

      
  
      this.dataSource.sort = this.sort;

      this.dataSource.paginator = this.paginator; 

    })

    this.operationService.getReportData(reportRequest).subscribe(res => {
      this.reportDataObtained = res;

      console.log("thththth")
      console.log(this.reportDataObtained)
    
      this.processing = false;
     
      //generate charts
      this.chartService.createPieChart('raisonRejet', this.reportDataObtained.raisonRejet)
      this.chartService.createPieChart('operationDistribution', this.reportDataObtained.operationDistribution) 


    })


    this.enableForm()


  }

  getNamePartnerFromIdPartner(idPartner){
    this.commonService.getNamePartnerFromIdPartner(idPartner, this.dataObtainedPartners)
    console.log(this.commonService.getNamePartnerFromIdPartner(idPartner, this.dataObtainedPartners))
  }

 
  filter() {

    this.commonService.applyFilter(this.dataSource, this.searchKey)

  }

  onSearchClear() {
    this.commonService.onSearchClear(this.searchKey, this.dataSource)
  }

 

}
