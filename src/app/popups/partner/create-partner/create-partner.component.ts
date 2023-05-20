import { Component, OnInit, Inject} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PartnerService } from '../../../services/ms_clients/partner.service';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-create-partner',
  templateUrl: './create-partner.component.html',
  styleUrls: ['./create-partner.component.scss']
})
export class CreatePartnerComponent implements OnInit {

  processing = false;

  constructor(private partnerService: PartnerService, public dialogRef: MatDialogRef<CreatePartnerComponent>)
     { }

  ngOnInit(): void {
  }

  /************* Forms *****************/
  onNoClick(): void {
    this.dialogRef.close();
  }


  form = new FormGroup({


    namePartner: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(3)])


  });

  disableForm() {
    this.form.controls['namePartner'].disable();

  }



  enableForm() {
    this.form.controls['namePartner'].enable();

  }

  disableUpdateForm() {
    this.form.controls['namePartner'].disable();

  }



  enableUpdateForm() {
    this.form.controls['namePartner'].enable();

  }


  updateForm = new FormGroup({

    namePartner: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(2)])

  })



  get f() {

    return this.form.controls;

  }

  get g() {

    return this.updateForm.controls;

  }




  createPartner() {
    console.log(this.form.get("namePartner").value)
    
    this.processing = true;
    this.disableForm()
    const partner = {
      namePartner: this.form.get('namePartner').value,

    }

    this.partnerService.postPartner(partner).subscribe(res => {
      Swal.fire({
        text: 'Partner updated successfully.',
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
