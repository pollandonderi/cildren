import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {
  ngOnInit(): void {
   
  }
  thankyoucontainer = document.querySelector(".card2");
  public submitbutton = document.getElementById("submit");
  public visible = "none";
  public Invisible = "";
  public number: number[] = [];
  onclick() {
    this.visible = "";
    this.Invisible = "none";
    
   }
   click1(){
     this.number.push(1)
 
   }
   click2(){
     this.number.push(2)
   }
   click3(){
     this.number.push(3)
   }
   click4(){
     this.number.push(4)
   }
   click5(){
     this.number.push(5)
   }

}
