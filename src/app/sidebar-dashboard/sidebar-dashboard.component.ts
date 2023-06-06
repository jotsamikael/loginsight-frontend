import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../services/ms_security/authentication.service';

@Component({
  selector: 'app-sidebar-dashboard',
  templateUrl: './sidebar-dashboard.component.html',
  styleUrls: ['./sidebar-dashboard.component.scss']
})
export class SidebarDashboardComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }
  loggedInUser;

  ngOnInit(): void {
    this.loggedInUser = this.authenticationService.currentUserValue; 
    console.log(this.loggedInUser)
  }

  logout(){ 
    console.log("grety")

   Swal.fire({
     title: 'Logout',
     text: 'Are you sure you want to logout?',
     icon: 'question',
     confirmButtonText: 'Yes',
     showDenyButton: true,
     denyButtonText: `Cancel`, 
     

   })
  }

}
