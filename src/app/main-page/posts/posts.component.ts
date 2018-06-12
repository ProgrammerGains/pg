import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  displayedColumns = ['title'];
  dataSource: MatTableDataSource<Posts>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.http.get<Array<Posts>>('/php_api/backend_posts_get.php')
      .subscribe((data: Posts[]) => {
        console.log(data);
        this.dataSource = new MatTableDataSource<Posts>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, error => {
        console.log('unable to connect', error);
      });
  }

  // TODO fix table sort icon
  applyFilter(filterValue: string) {
    console.log(filterValue + " " + typeof filterValue);
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

export interface Posts {
  title_display: string;
  title_ink: string;
  data: string;
  html: string;
  caption: string;
}
