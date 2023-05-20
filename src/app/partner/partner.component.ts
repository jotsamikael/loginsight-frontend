import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CreateBranchComponent } from '../popups/branch/create-branch/create-branch.component';
import { UpdateBranchComponent } from '../popups/branch/update-branch/update-branch.component';
import { CreatePartnerComponent } from '../popups/partner/create-partner/create-partner.component';
import { UpdatePartnerComponent } from '../popups/partner/update-partner/update-partner.component';
import { CreatePointOfPresenceComponent } from '../popups/point_of_presence/create-point-of-presence/create-point-of-presence.component';
import { UpdatePointOfPresenceComponent } from '../popups/point_of_presence/update-point-of-presence/update-point-of-presence.component';
import { CommonService } from '../services/common.service';
import { BranchService } from '../services/ms_clients/branch.service';
import { PartnerService } from '../services/ms_clients/partner.service';
import { PointOfPresenceService } from '../services/ms_clients/point-of-presence.service';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

 @ViewChild(MatSort, { static: false }) sortPartner: MatSort;
  //@ViewChild(MatPaginator, { static: false }) paginatorPartner: MatPaginator;

  @ViewChild(MatSort, { static: false }) sortBranch: MatSort;
  //@ViewChild(MatPaginator, { static: false }) paginatorBranch: MatPaginator;

  @ViewChild(MatSort, { static: false }) sortPointOfPresence: MatSort;
 // @ViewChild(MatPaginator, { static: false }) paginatorPointOfPresence: MatPaginator;

  @ViewChild('paginatorPartner') paginatorPartner: MatPaginator;
  @ViewChild('paginatorBranch') paginatorBranch: MatPaginator;
  @ViewChild('paginatorPointOfPresence') paginatorPointOfPresence: MatPaginator;

  displayedColumns: string[] = ['namePartner', 'activated', 'actions'];
  dataSourcePartner = new MatTableDataSource();


  displayedColumnsBranch: string[] = ['partner', 'nameBranch', 'point', 'activated', 'actions'];
  dataSourceBranch = new MatTableDataSource();

  displayedColumnsPoint: string[] = ['region', 'town', 'activated', 'actions'];
  dataSourcePointOfPresence = new MatTableDataSource();

  processing = false;

  dataObtainedPartners: any;

  dataObtainedBranch: any;

  dataObtainedPoint: any;

  searchKeyPartner;
  searchKeyBranch;
  searchKeyPointOfPresence;




  constructor(private commonService: CommonService, public dialog: MatDialog, private partnerService: PartnerService, private branchService: BranchService,
    private pointService: PointOfPresenceService) { }



  closeResult = '';
  modalPartner: any;

  ngOnInit(): void { }

 

  ngAfterViewInit(): void {


    /** get partners */
    this.partnerService.getPartners().subscribe(res => {
      this.dataObtainedPartners = res;

      console.log(res)
      console.log("touched")
      this.dataSourcePartner = new MatTableDataSource(this.dataObtainedPartners.slice().reverse());

      this.dataSourcePartner.sort = this.sortPartner;

      this.dataSourcePartner.paginator = this.paginatorPartner;
    })


      /** get branches */
      this.branchService.getBranches().subscribe(res => {
        this.dataObtainedBranch = res;

        console.log(res)
        this.dataSourceBranch = new MatTableDataSource(this.dataObtainedBranch.branchList.slice().reverse());

        this.dataSourceBranch.sort = this.sortBranch;

        this.dataSourceBranch.paginator = this.paginatorBranch;


      })


      /** get points of presence */
      this.pointService.getPointOfPresence().subscribe(res => {
        this.dataObtainedPoint = res;

        console.log(res)
        this.dataSourcePointOfPresence = new MatTableDataSource(this.dataObtainedPoint.slice().reverse());

        this.dataSourcePointOfPresence.sort = this.sortPointOfPresence;

        this.dataSourcePointOfPresence.paginator = this.paginatorPointOfPresence;


      })
    
  }


/**********FILTER FUNCTIONS *******************/
  filterPartner(){
   this.commonService.applyFilter(this.dataSourcePartner, this.searchKeyPartner)
 }

  filterBranch(event: Event) {
    this.commonService.applyFilter2(this.dataSourceBranch, event)

    // used for filtering table with sub element of json
    this.dataSourceBranch.filterPredicate = (data: any, filter) => {
      return data.partner.namePartner.toLowerCase().includes(filter) ||
        data.pointOfPresence.town.toLowerCase().includes(filter) ||
        data.nameBranch.toLowerCase().includes(filter)
       
  }

}

  filterPointOfPresence() {
    this.commonService.applyFilter(this.dataSourcePointOfPresence, this.searchKeyPointOfPresence)

    // used for filtering table with sub element of json
    this.dataSourcePointOfPresence.filterPredicate = (data: any, filter) => {
      return data.region.nameRegion.toLowerCase().includes(filter) ||
        data.region.town.toLowerCase().includes(filter)
      

    }
  }

  onSearchClearPartner(){
    this.commonService.onSearchClear(this.searchKeyPartner, this.dataSourcePartner)
  }

  onSearchClearBranch() {
    this.commonService.onSearchClear(this.searchKeyBranch, this.dataSourceBranch)
  }

  onSearchClearPointOfPresence() {
    this.commonService.onSearchClear(this.searchKeyPointOfPresence, this.dataSourcePointOfPresence)
  }



/**************MODAL FUNCTIONS ***********/

  openCreatePartner() {
   
    this.commonService.openCreateModal(CreatePartnerComponent, '300px', '500px')
    


  }

  openUpdatePartner(modalElement: any) { 
   
    this.commonService.openUpdateModal(modalElement, UpdatePartnerComponent, '300px', '500px')
    
  }


  openCreateBranch() {

    this.commonService.openCreateModal(CreateBranchComponent, '520px', '500px')
   

  }

  openUpdateBranch(modalElement: any) {
  

    this.commonService.openUpdateModal(modalElement, UpdateBranchComponent, '520px', '500px')
    

  }

  openCreatePoint() {
   
    this.commonService.openCreateModal(CreatePointOfPresenceComponent, '350px', '500px')
   
  }

  openUpdatePoint(modalElement: any) {
   

    this.commonService.openUpdateModal(modalElement, UpdatePointOfPresenceComponent, '350px', '500px')
   

  }


  openActivateModal(element){

  }

  openDeactivateModal(element){

  }

}
