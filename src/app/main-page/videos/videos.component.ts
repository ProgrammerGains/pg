import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: Video[];


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
        for (let i = 0; i < this.videos.length; i++) {
          this.videos[i]['loadVideo'] = false;
        }
      }, error => {
        console.log('unable to connect: ' + error);
    });
  }

  onVideoClick(index: number) {
    console.log(this.videos);
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
