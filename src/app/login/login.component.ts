import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from '../models/role.enum';
import { User } from '../models/user.model';
import { AuthenticationService } from '../services/ms_security/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User;
  errorMessage: string = "";
  currentUser;
  processing = false;

  constructor(private authentication: AuthenticationService, private router: Router) {
    this.authentication.currentUser.subscribe(
      data => {
        this.currentUser = data;


      }, err => {
        console.log(err)
      }
    )
  }

  ngOnInit(): void {
  }


  form = new FormGroup({


    email: new FormControl('', [Validators.required, Validators.email, , Validators.maxLength(30)]),

    password: new FormControl('', [Validators.required,  Validators.minLength(6), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*?[\d])(?=.*?[\W]).{6,15}$/),Validators.maxLength(15)]),

    




  });

  disableForm() {
    this.form.controls['email'].disable();

    this.form.controls['password'].disable();
 

  }



  enableForm() {
    this.form.controls['email'].enable();

    this.form.controls['password'].enable();


  }




  get f() {

    return this.form.controls;

  }


  login() {
    
    this.processing = true;
    this.disableForm()
    const credentials = {
      email: this.form.get('email').value,

      password: this.form.get('password').value,
    
    }

    this.authentication.login(credentials).subscribe(data => {
      this.currentUser = data;
      console.log("role " + this.currentUser.role)
      if (this.currentUser.activated === false) {

        this.router.navigate(['/account-deactivated'])

      } else {
        if (this.currentUser.firstUsage === true) {
          this.router.navigate(['/first-usage'])

        } else {

          if (this.currentUser.role === Role.SYSTEM_MANAGER) {

            this.router.navigate(['/settings-management'])

          } else if (this.currentUser.role === Role.ADMIN) {

            this.router.navigate(['/admin-dashboard'])

          } else if (this.currentUser.role === Role.OPERATOR) {
            this.router.navigate(['/dashboard'])
          }
          else {
            this.router.navigate(['/404'])

          }
        }

      }

    }, err => {
      if (err.error.type === "error") {
        this.errorMessage = "The server might not be running";
        console.log(err)

      } else {
        this.errorMessage = "email or password is invalid";
        console.log(err)

      }
    }
    )
  }

}
