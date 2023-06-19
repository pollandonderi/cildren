import { Component } from '@angular/core';
import { faAngleDoubleLeft, faMailBulk, faMap, faTty } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  map = faMap
  phone = faTty;
  email = faMailBulk;
  arrow = faAngleDoubleLeft;
}
