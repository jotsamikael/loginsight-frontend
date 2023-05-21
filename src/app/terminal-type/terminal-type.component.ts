import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CreateTerminalTypeComponent } from '../popups/TerminalType/create-terminal-type/create-terminal-type.component';
import { UpdateTerminalTypeComponent } from '../popups/TerminalType/update-terminal-type/update-terminal-type.component';
import { CommonService } from '../services/common.service';
import { TerminalTypeService } from '../services/ms_machines/terminal-type.service';

@Component({
  selector: 'app-terminal-type',
  templateUrl: './terminal-type.component.html',
  styleUrls: ['./terminal-type.component.scss']
})
export class TerminalTypeComponent implements OnInit {
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  displayedColumns: string[] = ['type', 'activated', 'actions'];
  dataSource = new MatTableDataSource();



  processing = false;


  dataObtainedTerminalType: any;


  searchKey;



  constructor(private commonService: CommonService, public dialog: MatDialog, private terminalTypeService: TerminalTypeService) { }


  filter() {

    this.commonService.applyFilter(this.dataSource, this.searchKey)

   

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
    this.terminalTypeService.getTerminalTypes().subscribe(res => {
      this.dataObtainedTerminalType = res;

      console.log(res)
      console.log("touched")
      this.dataSource = new MatTableDataSource(this.dataObtainedTerminalType.slice().reverse());

      this.dataSource.sort = this.sort;

      this.dataSource.paginator = this.paginator;

    })

  }


  openCreateTerminalType() {
    const dialogRef = this.dialog.open(CreateTerminalTypeComponent, { height: '300px', width: '250px' });
    dialogRef.afterClosed().subscribe(result => {


      this.refreshData();
    });

  }

  openUpdateTerminalType(modalElement: any) {
    const dialogRef = this.dialog.open(UpdateTerminalTypeComponent, { height: '300px', width: '250px', data: { element: modalElement } });
    dialogRef.afterClosed().subscribe(result => {


      this.refreshData();
    });

  } 

}
