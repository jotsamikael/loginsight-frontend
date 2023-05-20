import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  numberOfOperation = '0';
  tauxDeRejet = '0';
  montantRetrait = '0';
  montantVersement = '0';
  choosenPartner;


 
  //graph
  public canvas: any;
  public ctx: any;

  reportDataObtained
  dataObtainedTableSummary
  displayedColumns: string[] = ['date', 'retraitCount', 'retraitMontant', 'versementCount', 'versementMontant', 'interrogationCount', 'transrejetCount', 'demandeReleCount', 'captureCardCount', 'totalOperationCount'];



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
  selectedMonth = "ALL";

  processing = false;
  dataObtainedPartners: any;
  listOfPartners: any;

  constructor(public dialog: MatDialog, private operationService: OperationService, private partnerService: PartnerService,
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
      month: 'ALL',
    }

    this.operationService.getKpiData(reportRequest).subscribe(res => {
      console.log("rear")
      this.dataObtainedKpi = res;
    })


  }


  refreshData() {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    const reportRequest = {
      partner: '1',
      branch: 'ALL',
      year: this.selectedYear,
      month: 'ALL',
    }


    /** get report table data */
    this.operationService.getTableSummary(reportRequest).subscribe(res => {
      this.dataObtainedTableSummary = res;



      console.log("crinjy1")
      this.dataSource = new MatTableDataSource(this.dataObtainedTableSummary);
      console.log("get it1")
      console.log(this.dataObtainedTableSummary)

      

      console.log(this.dataObtainedTableSummary.date)

      this.dataSource.sort = this.sort;

      this.dataSource.paginator = this.paginator;

    })

  }


  filterBranches() {
    console.log("frtos")
    let partner = this.form.get('partner').value
    console.log(partner)
    // Filter the list of branches by the selected partner's id
    this.listOfBranches = this.dataObtainedBranches.branchList.filter(branch => branch.partner.idPartner == partner);
    let allObject = { "idBranch": "0", "partner": { "idPartner": "0", "namePartner": "ALL" } };

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
    console.log(this.form.get("month").value)
    this.processing = true;
    this.disableForm()
    const reportRequest = {

      partner: this.form.get('partner').value,
      branch: this.form.get('branch').value,
      year: this.form.get('year').value,
      month: this.form.get('month').value,
    }

    console.log("geiger")
    console.log(reportRequest)
    this.operationService.getKpiData(reportRequest).subscribe(res => {
      //console.log(res)
      this.dataObtainedKpi = res;
    })



    /** get report table data */
    this.operationService.getTableSummary(reportRequest).subscribe(res => {
      this.dataObtainedTableSummary = res;



      console.log("crinjy2")
      this.dataSource = new MatTableDataSource(this.dataObtainedTableSummary);
      console.log("get it2")
      console.log(this.dataObtainedTableSummary)

  
      this.dataSource.sort = this.sort;

      this.dataSource.paginator = this.paginator;

    })

    this.operationService.getReportData(reportRequest).subscribe(res => {
      this.reportDataObtained = res;

    
      this.processing = false;
      this.enableForm()

    })





  }



 

 

}
