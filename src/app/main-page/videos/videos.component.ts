import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: Video[];
  videosSelected: Array<boolean>;

  constructor(private http: HttpClient) {
    this.videos = [];
  }

  ngOnInit() {
    this.getVideos();
  }

  getVideos() {
    this.http.get<Array<Video>>('/php_api/videos_get.php')
      .subscribe((res: any) => {
        console.log(res);
        this.videos = res;
      }, error => {
        console.log('unable to connect: ' + error);
    });
  }

  onVideoClick(index: number) {
    console.log(index);
  }
}

export interface Video {
  title_link: string;
  title_display: string;
  date: string;
  author: string;
  caption: string;
  youtube_link;
}
