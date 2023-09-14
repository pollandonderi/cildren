import { Component, OnInit } from '@angular/core';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { NewsService } from 'src/app/services/news.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  arrow = faAngleDoubleLeft;
  news: any;
  constructor(private service:NewsService) {}
  ngOnInit(): void {
    this.service.getnews()

    .subscribe(response => {

      this.news = response;

    });
  }

}
