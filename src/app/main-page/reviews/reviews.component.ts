import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  videos: Reviews[];

  constructor(private http: HttpClient) {
    this.videos = [];
  }

  ngOnInit() {
    this.getVideos();
  }

  getVideos() {
    this.http.get<Array<Reviews>>('/php_api/reviews_get.php')
      .subscribe((res: any) => {
        console.log(res);
        this.videos = res;
      }, error => {
        console.log('unable to connect: ' + error);
      });
  }

  onVideoClick(title_link: string) {
    console.log(title_link);
  }
}

export interface Reviews {
  title_link: string;
  title_display: string;
  date: string;
  author: string;
  caption: string;
  youtube_link;
}
