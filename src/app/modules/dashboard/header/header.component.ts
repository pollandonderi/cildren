import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
