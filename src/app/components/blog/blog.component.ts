import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  
  constructor(){}
 
  ngOnInit(): void {
    document.addEventListener("DOMContentLoaded", () => {
      const coll: HTMLCollectionOf<Element> = document.getElementsByClassName("collapsible");
      
      for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function(this: HTMLElement) {
          this.classList.toggle("active");
          const content: HTMLElement | null = this.nextElementSibling as HTMLElement;
          
          if (content?.style.maxHeight) {
            content.style.maxHeight = '';
          } else {
            content?.style.setProperty("max-height", content.scrollHeight + "px");
          }
        });
      }
    });
    
  }  
}
