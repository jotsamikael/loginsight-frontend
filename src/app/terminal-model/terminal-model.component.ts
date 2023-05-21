import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CreateTerminalModelComponent } from '../popups/TerminalModel/create-terminal-model/create-terminal-model.component';
import { UpdateTerminalModelComponent } from '../popups/TerminalModel/update-terminal-model/update-terminal-model.component';
import { CommonService } from '../services/common.service';
import { TerminalModelService } from '../services/ms_machines/terminal-model.service';

@Component({
  selector: 'app-terminal-model',
  templateUrl: './terminal-model.component.html',
  styleUrls: ['./terminal-model.component.scss']
})
export class TerminalModelComponent implements OnInit {

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  displayedColumns: string[] = ['modelID', 'nameModel', 'brand', 'activated', 'actions'];
  dataSource = new MatTableDataSource();



  processing = false;


  dataObtainedTerminalModel: any;


  searchKey;



  constructor(private commonService: CommonService, public dialog: MatDialog, private terminalModelService: TerminalModelService) { }



 
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


  closeResult = '';
  modalPartner: any;

  ngOnInit(): void { }

  refreshData() {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {


    /** get partners */
    this.terminalModelService.getTerminalModels().subscribe(res => {
      this.dataObtainedTerminalModel = res;

      console.log(res)
      console.log("touched")
      this.dataSource = new MatTableDataSource(this.dataObtainedTerminalModel.slice().reverse());

      this.dataSource.sort = this.sort;

      this.dataSource.paginator = this.paginator;

    })

  }


  openCreateTerminalModel() {
    const dialogRef = this.dialog.open(CreateTerminalModelComponent, { height: '300px', width: '250px' });
    dialogRef.afterClosed().subscribe(result => {


      this.refreshData();
    });

  }

  openUpdateTerminalModel(modalElement: any) {
    const dialogRef = this.dialog.open(UpdateTerminalModelComponent, { height: '300px', width: '250px', data: { element: modalElement } });
    dialogRef.afterClosed().subscribe(result => {


      this.refreshData();
    });

  } 
}
