import { Component, OnInit } from '@angular/core';
import { faAngleDoubleLeft, faQuoteLeft, faQuoteRight, faShoePrints } from '@fortawesome/free-solid-svg-icons';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

arrow = faAngleDoubleLeft;
openingquotes = faQuoteLeft;
shoes = faShoePrints;
constructor(private router: Router){}
ngOnInit(): void{
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      window.scrollTo(0, 0); // Scroll to the top when navigation is complete
    }
  });
}

}
