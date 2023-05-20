import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PointOfPresenceService } from '../../../services/ms_clients/point-of-presence.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-point-of-presence',
  templateUrl: './create-point-of-presence.component.html',
  styleUrls: ['./create-point-of-presence.component.scss']
  
})




export class CreatePointOfPresenceComponent implements OnInit {

  processing = false;

  regionList: any;
  

  

 

  constructor(private pointService: PointOfPresenceService, public dialogRef: MatDialogRef<CreatePointOfPresenceComponent>) { }

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
    region: new FormControl('', [Validators.required])

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


  createPointOfPresence() {
    console.log(this.form.get("region").value)
    this.processing = true;
    this.disableForm()
    const pointOfPresence = {
      idRegion: this.form.get('region').value,
      town: this.form.get('town').value,
    
    }

    this.pointService.postPointOfPresence(pointOfPresence).subscribe(res => {
      Swal.fire({
        text: 'point of presence added successfully.',
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
