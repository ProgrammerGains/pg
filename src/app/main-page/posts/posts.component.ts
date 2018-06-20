import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  numPostsPerPage: number;
  numPosts: number;
  lengthInit: boolean;
  reviews: any[] = [];

  displayedColumns = ['title', 'thumbnail'];
  dataSource: MatTableDataSource<Posts>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private changeDetectorRefs: ChangeDetectorRef,
              private http: HttpClient,
              private router: Router) {
    this.numPostsPerPage = 2;
  }

  ngOnInit() {
    this.paginator.page.subscribe(() => {
      this.getPosts();
    });

    this.getPosts();
  }

  getPosts() {
    this.http.post('/php_api/posts_get.php',
      { row_start: this.paginator.pageIndex * (this.numPostsPerPage), row_include: this.numPostsPerPage })
      .subscribe((data: Posts[]) => {
        if (data) {
          console.log(data);
          this.numPosts = data[data.length - 1]['total_count'];
          this.dataSource = new MatTableDataSource<Posts>(data.slice(0, -1));

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

  onPostClick(title_link: string) {
    this.router.navigate([title_link]);
  }
}

export interface Posts {
  title_display: string;
  title_ink: string;
  data: string;
  html: string;
  caption: string;
}
