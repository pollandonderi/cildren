import { Component, OnInit } from '@angular/core';
import { faAngleDoubleLeft, faCheckCircle, faChevronCircleUp, faLevelDownAlt, faLocationArrow, faMailBulk, faMap, faMapPin, faMarker, faPhoneSquare, faPlusCircle, faSearchLocation, faTty } from '@fortawesome/free-solid-svg-icons';
import { NewsService } from 'src/app/services/news.service';
const activities1 = [ {id:'1', name:"climbing walls" },{id:'2', name:"ball pools"},{id:'3', name:"trampolines"}]
const birthdayactivities = [{id:"1", name:"cake cutting"},{id:"2",name:"Ample environment"},{id:"3", name:"speeches"}]
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  news: any;
  constructor(private service:NewsService) {}
  ngOnInit(): void {
    this.service.getnews()

    .subscribe(response => {

      this.news = response;

    });
   
  }
  
arrowdown = faLevelDownAlt;
arrow = faAngleDoubleLeft;
marker = faMarker;
circlecheck = faCheckCircle;
  activities = activities1;
  birthdays = birthdayactivities;
  circleup = faChevronCircleUp; //we will use this when offline now
 
  public visible = "";
  public invisible = "none";
  backtoentertainment(){
    this.invisible = "none";
    this.visible = "";
  }
  showbirthday(){
    this.invisible = "";
    this.visible = "none";
  }
  showholiday(){
    
  }

}
