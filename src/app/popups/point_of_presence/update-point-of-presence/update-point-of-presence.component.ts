import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import Swal from 'sweetalert2';
import { PointOfPresenceService } from '../../../services/ms_clients/point-of-presence.service';
import { CreateBranchComponent } from '../../branch/create-branch/create-branch.component';
import { DialogData } from '../../branch/update-branch/update-branch.component';

@Component({
  selector: 'app-update-point-of-presence',
  templateUrl: './update-point-of-presence.component.html',
  styleUrls: ['./update-point-of-presence.component.scss']
})
export class UpdatePointOfPresenceComponent implements OnInit {

  processing = false;

  regionList: any;

  constructor(private pointService: PointOfPresenceService, public dialogRef: MatDialogRef<CreateBranchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.pointService.getRegion().subscribe(res => {
      this.regionList = res;

    })

  }


  form = new FormGroup({


    town: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]),
    region: new FormControl('', [Validators.required]),

  });

  disableForm() {
    this.form.controls['region'].disable();
    this.form.controls['town'].disable();


  }



  enableForm() {
    this.form.controls['region'].enable();
    this.form.controls['town'].enable();

  }




  get f() {

    return this.form.controls;

  }


  updatePointOfPresence() {
    console.log(this.form.get("region").value)
    this.processing = true;
    this.disableForm()
    const pointOfPresence = {
      region: this.form.get('region').value.toUpperCase(),
      town: this.form.get('town').value,

    }

    this.pointService.updatePointOfPresence(pointOfPresence, this.data.element.idPointOfPresence).subscribe(res => {
      Swal.fire({
        text: 'PointOfPresence added successfully.',
        icon: 'success',
        timer: 3000
      }) 

 

      this.processing = false;
      this.enableForm()

    }, err => {

      Swal.fire({
        text: 'Unexpected error occured.',
        icon: 'error',
        timer: 3000
      })


      this.processing = false;
      this.enableForm();
    })
  }
}
