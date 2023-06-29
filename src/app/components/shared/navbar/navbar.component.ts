import { Component } from '@angular/core';
import { faSearch, faMapMarker, faRoute } from '@fortawesome/free-solid-svg-icons';
import { AboutUsComponent } from '../../about-us/about-us.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  search = faSearch;
  maps = faRoute;
}
