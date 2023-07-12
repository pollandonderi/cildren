import { Component } from '@angular/core';
import { faAngleDoubleLeft, faQuoteLeft, faQuoteRight, faShoePrints } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
arrow = faAngleDoubleLeft;
openingquotes = faQuoteLeft;
shoes = faShoePrints;
}
