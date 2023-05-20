import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TerminalTypeService } from '../../../services/ms_machines/terminal-type.service';

import Swal from 'sweetalert2';
import { CreateBranchComponent } from '../../branch/create-branch/create-branch.component';
import { DialogData } from '../../branch/update-branch/update-branch.component';

@Component({
  selector: 'app-update-terminal-type',
  templateUrl: './update-terminal-type.component.html',
  styleUrls: ['./update-terminal-type.component.scss']
})
export class UpdateTerminalTypeComponent implements OnInit {

  processing = false;

  

  constructor(private terminalTypeService: TerminalTypeService, public dialogRef: MatDialogRef<CreateBranchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    

  }


  form = new FormGroup({


    type: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]),

  });

  disableForm() {
    this.form.controls['type'].disable();


  }



  enableForm() {
    this.form.controls['type'].enable();

  }




  get f() {

    return this.form.controls;

  }


  updateTerminalType() {
    console.log(this.form.get("type").value)
    this.processing = true; 
    this.disableForm()
    const termianlType = {
      type: this.form.get('type').value.toUpperCase(),

    }

    this.terminalTypeService.updateTerminalType(termianlType, this.data.element.idTerminalType).subscribe(res => {
      Swal.fire({
        text: 'Terminal type updated successfully.',
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
