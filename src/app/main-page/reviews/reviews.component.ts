import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Posts} from "../posts/posts.component";
import {Subscription} from "rxjs/internal/Subscription";
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  numPostsPerPage: number;
  numPosts: number;
  lengthInit: boolean;

  displayedColumns = ['title', 'thumbnail'];
  dataSource: MatTableDataSource<Reviews>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router) {
    this.numPostsPerPage = 2;
  }

  ngOnInit() {
    this.paginator.page.subscribe(() => {
      this.getVideos();
    });

    this.getVideos();
  }

  getVideos() {
    this.http.post<Array<Reviews>>('/php_api/reviews_get.php',
      { row_start: this.paginator.pageIndex * (this.numPostsPerPage), row_include: this.numPostsPerPage })
      .subscribe((data: Reviews[]) => {
        if (data) {
          console.log(data);
          this.numPosts = data[data.length - 1]['total_count'];
          this.dataSource = new MatTableDataSource<Reviews>(data.slice(0, -1));
          if (!this.lengthInit) {
            this.dataSource.paginator = this.paginator;
            this.lengthInit = true;
          }
        }
      }, error => {
        console.log('unable to connect: ' + error);
      });
  }

  onSearch(seachValue: string) {

  }

  onReviewClick(title_link: string) {
    this.router.navigate([title_link], { relativeTo: this.route })
  }
}

export interface Reviews {
  title_link: string;
  title_display: string;
  date: string;
  author: string;
  caption: string;
  total_count: number;
}
