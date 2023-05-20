import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TerminalTypeService } from '../../../services/ms_machines/terminal-type.service';

import Swal from 'sweetalert2';
import { CreateBranchComponent } from '../../branch/create-branch/create-branch.component';

@Component({
  selector: 'app-create-terminal-type',
  templateUrl: './create-terminal-type.component.html',
  styleUrls: ['./create-terminal-type.component.scss']
})
export class CreateTerminalTypeComponent implements OnInit {


  processing = false;

  constructor(private terminalTypeService: TerminalTypeService, public dialogRef: MatDialogRef<CreateBranchComponent>) { }

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


  createTerminalType() {
    console.log(this.form.get("type").value)
    this.processing = true;
    this.disableForm()
    const type = {
      type: this.form.get('type').value,
    }

    this.terminalTypeService.postTerminalType(type).subscribe(res => {
      Swal.fire({
        text: 'terminal type added successfully.',
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
