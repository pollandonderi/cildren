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
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  
}
