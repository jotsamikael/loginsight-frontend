import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PartnerService } from '../../../services/ms_clients/partner.service';
import { CreatePartnerComponent } from '../create-partner/create-partner.component';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';


export interface DialogData {
  element: any;

}


@Component({
  selector: 'app-update-partner',
  templateUrl: './update-partner.component.html',
  styleUrls: ['./update-partner.component.scss']
})
export class UpdatePartnerComponent implements OnInit {

  processing = false;

  constructor(private partnerService: PartnerService, public dialogRef: MatDialogRef<CreatePartnerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit(): void {
    
  }


  updateForm = new FormGroup({

    namePartner: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(3)])

  })
 




  disableUpdateForm() {
    this.updateForm.controls['namePartner'].disable();

  }



  enableUpdateForm() {
    this.updateForm.controls['namePartner'].enable();

  }


 



  get f() {

    return this.updateForm.controls;

  }

 




  updatePartner() {
    console.log(this.updateForm.get("namePartner").value)

    this.processing = true;
    this.disableUpdateForm()
    const partner = {
      namePartner: this.updateForm.get('namePartner').value,

    }

    this.partnerService.updatePartner(partner, this.data.element.idPartner).subscribe(res => {
      Swal.fire({
        text: 'Partner updated successfully.',
        icon: 'success',
        timer: 3000
      })



      this.processing = false;
      this.enableUpdateForm()

    }, err => {

      Swal.fire({
        text: 'Unexpected error occured.',
        icon: 'error',
        timer: 3000
      })


      this.processing = false;
      this.enableUpdateForm();
    })
  }
}
