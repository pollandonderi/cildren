import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
declare var handleSignOut:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  PowerOff = faPowerOff
  @Input() userProfile:any;
  // userProfile:any;
  constructor(private router:Router){}
  ngOnInit(){
    this.userProfile = JSON.parse(sessionStorage.getItem("loggedInUser") || "") 
  }
  handleSignOut(){
    sessionStorage.removeItem("loggedInUser")  
    this.router.navigate(["/homepage"]).then(() =>{

    });
  }
}
