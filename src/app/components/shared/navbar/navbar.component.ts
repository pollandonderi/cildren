import { Component, OnInit } from '@angular/core';
import { faSearch, faMapMarker, faRoute, faStarAndCrescent, faShoppingCart, faAddressBook, faTasks, faStar, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { AboutUsComponent } from '../../about-us/about-us.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faRankingStar = faAddressBook;
  fatask= faTasks
  search = faUserPlus;
  maps = faRoute;
  star = faStar;
 faStarAndCrescent = faStarAndCrescent
  faShoppingCart = faShoppingCart;
  constructor(){}
  ngOnInit(): void {
    const primaryNav = document.querySelector('.primary-navigation');
const navMobile = document.querySelector('.mobile-nav-toggle');

navMobile?.addEventListener('click', () =>{
  const visibility = primaryNav?.getAttribute("data-visible");

  if (!visibility ||(visibility === "false")){
    primaryNav?.setAttribute("data-visible", "true");
    navMobile.setAttribute("aria-expanded", "true");
  }
  else{
    primaryNav?.setAttribute("data-visible" , "false");
    navMobile.setAttribute("aria-expanded", "false");
  }
})
    
  }

}
