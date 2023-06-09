import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  

  constructor(public dialog: MatDialog,) { }

  refreshData() {
    window.location.reload();
  }


  onSearchClear(searchKey, dataSource) {
    searchKey = "";
    this.applyFilter(dataSource, searchKey);

  }


  applyFilter(dataSource, searchKey) {

    dataSource.filter = searchKey.trim().toLowerCase()
   

  }


  applyFilter2(dataSource, event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    dataSource.filter = filterValue.trim().toLowerCase();
  }

  

  openCreateModal(givenComponent, modalHeight, modalWidth, callback) {
    const dialogRef = this.dialog.open(givenComponent, { height: modalHeight, width: modalWidth });
    dialogRef.afterClosed().subscribe(result => {
      //refresh data
      
     
        this.refreshData()
 
      
    });
  }


  openUpdateModal(modalElement: any, givenComponent, modalHeight, modalWidth) {
    const dialogRef = this.dialog.open(givenComponent, { height: modalHeight, width: modalWidth, data: { element: modalElement } });
    dialogRef.afterClosed().subscribe(result => {
      //refresh data

      setTimeout(() => {
        this.refreshData();
      }, 3000);
     
      
    });

  }

  /****************************************************************/

   getNamePartnerFromIdPartner(id: number, listOfObjects): string {
  // loop over the listOfObjects array
    for (let i = 0; i < listOfObjects.length; i++) {
    // get the current element
      let currentElement = listOfObjects[i];
    // check if the idPartner property matches the parameter
      if (currentElement.idPartner === id) {
      // return the namePartner property
        return currentElement.namePartner;
    }
  }
  // if no match is found, return null or an empty string
  return null;
}

}