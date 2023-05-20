import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar-dashboard',
  templateUrl: './sidebar-dashboard.component.html',
  styleUrls: ['./sidebar-dashboard.component.scss']
})
export class SidebarDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    console.log("grety")

   Swal.fire({
     title: 'Deconnexion',
     text: 'Etes vous sure de vouloir vous deconnecter?',
     icon: 'question',
     confirmButtonText: 'Oui',
     showDenyButton: true,
     denyButtonText: `Annuler`, 
     

   })
  }

}
