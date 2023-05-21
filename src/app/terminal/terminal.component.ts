import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CreateTerminalComponent } from '../popups/Terminal/create-terminal/create-terminal.component';
import { UpdateTerminalComponent } from '../popups/Terminal/update-terminal/update-terminal.component';
import { CommonService } from '../services/common.service';
import { BranchService } from '../services/ms_clients/branch.service';
import { TerminalService } from '../services/ms_machines/terminal.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['nameTerminal', 'termID', 'terminalType', 'terminalModel', 'idBranch', 'activated', 'actions'];

  dataSource = new MatTableDataSource();



  processing = false;


  dataObtainedTerminalModel: any;

  ObtainedBranch: any;
  branch: string;
  idBranch = 1;



  searchKey;



  constructor(public dialog: MatDialog, private commonService: CommonService, private terminalService: TerminalService, private branchService: BranchService) { }

 


  closeResult = '';
  modalPartner: any;

  ngOnInit(): void {
    console.log()
  }  



  getBranchById(idBranch: string) {
    this.branchService.getBranchById(idBranch).subscribe(res => {
      console.log(res)
      this.ObtainedBranch = res
      this.branch = this.ObtainedBranch.nameBranch

    })

  }


  



  ngAfterViewInit() {


    /** get partners */
    this.terminalService.getTerminals().subscribe(res => {
      this.dataObtainedTerminalModel = res;

      console.log(res)
      console.log("touched")
      this.dataSource = new MatTableDataSource(this.dataObtainedTerminalModel.slice().reverse());

      this.dataSource.sort = this.sort;

      this.dataSource.paginator = this.paginator;

    })

  }


  filter() {

    this.commonService.applyFilter(this.dataSource, this.searchKey)

    // used for filtering table with sub element of json
    this.dataSource.filterPredicate = (data: any, filter) => {
      return data.modelID.toLowerCase().includes(filter) ||
        data.nameModel.toLowerCase().includes(filter) || 
        data.brand.nameBrand.toLowerCase().includes(filter) 
  

    }

  }

  onSearchClear() {
    this.commonService.onSearchClear(this.searchKey, this.dataSource)
  }


  openCreateTerminal() {
  
    this.commonService.openCreateModal(CreateTerminalComponent, '300px', '500px', this.ngOnInit)

  }

  openUpdateTerminal(modalElement: any) {
   

    this.commonService.openUpdateModal(modalElement, UpdateTerminalComponent, '300px', '500px')


  } 

}
