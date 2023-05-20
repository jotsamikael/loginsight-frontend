import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TerminalBrandService } from '../../../services/ms_machines/terminal-brand.service';
import Swal from 'sweetalert2';
import { DialogData } from '../../branch/update-branch/update-branch.component';
import { CreatePartnerComponent } from '../../partner/create-partner/create-partner.component';

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.scss']
})
export class UpdateBrandComponent implements OnInit {


  processing = false;

  constructor(private brandService: TerminalBrandService, public dialogRef: MatDialogRef<CreatePartnerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit(): void {

  }

  updateForm = new FormGroup({

    nameBrand: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(3)])

  })





  disableUpdateForm() {
    this.updateForm.controls['nameBrand'].disable();

  }



  enableUpdateForm() {
    this.updateForm.controls['nameBrand'].enable();

  }






  get f() {

    return this.updateForm.controls;

  }






  updateBrand() {
    console.log(this.updateForm.get("nameBrand").value)

    this.processing = true;
    this.disableUpdateForm()
    const brand = {
      nameBrand: this.updateForm.get('nameBrand').value,

    }

    this.brandService.updateBrand(brand, this.data.element.idPartner).subscribe(res => {
      Swal.fire({
        text: 'Partner added successfully.',
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
