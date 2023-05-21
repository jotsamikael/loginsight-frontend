import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CreateBrandComponent } from '../popups/Brand/create-brand/create-brand.component';
import { UpdateBrandComponent } from '../popups/Brand/update-brand/update-brand.component';
import { CommonService } from '../services/common.service';
import { TerminalBrandService } from '../services/ms_machines/terminal-brand.service';

@Component({
  selector: 'app-terminal-brand',
  templateUrl: './terminal-brand.component.html',
  styleUrls: ['./terminal-brand.component.scss']
})
export class TerminalBrandComponent implements OnInit {

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  displayedColumns: string[] = ['nameBrand', 'activated', 'actions'];
  dataSource = new MatTableDataSource();



  processing = false;


  dataObtainedBrand: any;


  searchKey;



  constructor(private commonService: CommonService, public dialog: MatDialog, private brandService: TerminalBrandService) { }

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
    this.brandService.getBrands().subscribe(res => {
      this.dataObtainedBrand = res;

      console.log(res)
      console.log("touched")
      this.dataSource = new MatTableDataSource(this.dataObtainedBrand.slice().reverse());

      this.dataSource.sort = this.sort;

      this.dataSource.paginator = this.paginator;

    })

  }


  openCreateBrand() {
    const dialogRef = this.dialog.open(CreateBrandComponent, { height: '300px', width: '500px' });
    dialogRef.afterClosed().subscribe(result => {


      this.refreshData();
    });

  }

  openUpdateBrand(modalElement: any) {
    const dialogRef = this.dialog.open(UpdateBrandComponent, { height: '300px', width: '500px', data: { element: modalElement } });
    dialogRef.afterClosed().subscribe(result => {


      this.refreshData();
    });

  } 

}
