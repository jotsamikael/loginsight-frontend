import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PartnerService } from '../../../services/ms_clients/partner.service';
import Swal from 'sweetalert2';
import { BranchService } from '../../../services/ms_clients/branch.service';
import { CreateBranchComponent } from '../create-branch/create-branch.component';
import { PointOfPresenceService } from 'src/app/services/ms_clients/point-of-presence.service';

export interface DialogData {
  element: any;

}

@Component({
  selector: 'app-update-branch',
  templateUrl: './update-branch.component.html',
  styleUrls: ['./update-branch.component.scss']
})
export class UpdateBranchComponent implements OnInit {

   processing = false;

  partnerList:any;
  pointList: any;

  constructor(private pointService: PointOfPresenceService, private branchService: BranchService, private partnerService: PartnerService, public dialogRef: MatDialogRef<CreateBranchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

    this.partnerService.getPartners().subscribe( res=>{
      this.partnerList = res;
      console.log(this.partnerList)
    })

    this.pointService.getPointOfPresence().subscribe(res => {
      this.pointList = res;
      console.log(this.pointList)
    })

  }



  form = new FormGroup({


    nameBranch: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]),


    xCoor: new FormControl('', [Validators.required]),
    yCoor: new FormControl('', [Validators.required]),
    partner: new FormControl('', [Validators.required]),
    pointOfPresence: new FormControl('', [Validators.required]),




  });

  disableForm() {
    this.form.controls['nameBranch'].disable();

    this.form.controls['xCoor'].disable();
    this.form.controls['yCoor'].disable();
    this.form.controls['partner'].disable();
    this.form.controls['pointOfPresence'].disable();

  }



  enableForm() {
    this.form.controls['nameBranch'].enable();

    this.form.controls['xCoor'].enable();
    this.form.controls['yCoor'].enable();
    this.form.controls['partner'].enable();
    this.form.controls['pointOfPresence'].enable();


  }


  get f() {

    return this.form.controls;

  }


  updateBranch() {
    console.log(this.form.get("nameBranch").value)
    this.processing = true;
    this.disableForm()
    const branch = {
      nameBranch: this.form.get('nameBranch').value,

      xCoor: this.form.get('xCoor').value,
      yCoor: this.form.get('yCoor').value,
      idPartner: this.form.get('partner').value,
      idPointOfPresence: this.form.get('pointOfPresence').value,




    }

    this.branchService.updateBranch(branch, this.data.element.idBranch ).subscribe(res => {
      Swal.fire({
        text: 'Branch updated successfully.',
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
