import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateBranchComponent } from '../../../popups/branch/create-branch/create-branch.component';
import { TerminalBrandService } from '../../../services/ms_machines/terminal-brand.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.scss']
})
export class CreateBrandComponent implements OnInit {


  processing = false;

  partnerList: any;
  pointList: any;


  constructor( private brandService: TerminalBrandService, public dialogRef: MatDialogRef<CreateBranchComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {


  }




  form = new FormGroup({


    nameBrand: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]),
   
  });

  disableForm() {
    this.form.controls['nameBrand'].disable();
   

  }



  enableForm() {
    this.form.controls['nameBrand'].enable();
  }




  get f() {

    return this.form.controls;

  }


  createBrand() {
    console.log(this.form.get("nameBrand").value)
    this.processing = true;
    this.disableForm()
    const brand = {
      nameBrand: this.form.get('nameBrand').value,
    }

    this.brandService.postBrand(brand).subscribe(res => {
      Swal.fire({
        text: 'Brand added successfully.',
        icon: 'success',
        timer: 3000
      })



      this.processing = false;
      this.enableForm();
      this.onNoClick();

    }, err => {

      Swal.fire({
        text: 'Unexpected error occured.',
        icon: 'error',
        timer: 3000
      })


      this.processing = false;
      this.enableForm();
      this.onNoClick();
    })
  }


}
