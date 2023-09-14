import { Component } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-entertainment-package',
  templateUrl: './entertainment-package.component.html',
  styleUrls: ['./entertainment-package.component.scss']
})
export class EntertainmentPackageComponent {
  circlecheck = faCheckCircle;
}
