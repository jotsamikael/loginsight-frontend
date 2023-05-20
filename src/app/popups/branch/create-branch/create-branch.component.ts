import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { PointOfPresenceService } from '../../../services/ms_clients/point-of-presence.service';
import Swal from 'sweetalert2';
import { BranchService } from 'src/app/services/ms_clients/branch.service';
import { PartnerService } from 'src/app/services/ms_clients/partner.service';

@Component({
  selector: 'app-create-branch',
  templateUrl: './create-branch.component.html',
  styleUrls: ['./create-branch.component.scss']
})
export class CreateBranchComponent implements OnInit {

  processing = false;

  partnerList:any;
  pointList: any;


  constructor(private pointService: PointOfPresenceService,private branchService: BranchService, private partnerService: PartnerService, public dialogRef: MatDialogRef<CreateBranchComponent>) { }

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


  createBranch() {
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

    this.branchService.postBranch(branch).subscribe(res => {
      Swal.fire({
        text: 'Branch added successfully.',
        icon: 'success',
        timer: 3000
      })

      console.log(res)

      this.processing = false;
      this.enableForm()

    }, err => {

      Swal.fire({
        text: 'Unexpected error occured.',
        icon: 'error',
        timer: 3000
      })

       console.log(err)
      this.processing = false;
      this.enableForm();
    })
  }

}
