import { Component } from '@angular/core';
import { faSearch, faMapMarker, faRoute } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  search = faSearch;
  maps = faRoute;
}