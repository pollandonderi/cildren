import { Component, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-servicesoffered',
  templateUrl: './servicesoffered.component.html',
  styleUrls: ['./servicesoffered.component.scss']
})
export class ServicesofferedComponent implements OnInit{

  constructor(private router: Router){}
  ngOnInit(): void{
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to the top when navigation is complete
      }
    });
  }
}
