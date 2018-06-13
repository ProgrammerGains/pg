import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postHTML: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.loadHTML();
  }

  loadHTML() {
    this.http.post<string>('/php_api/post_get.php', {post: this.route.snapshot.params['post']})
      .subscribe((res: any) => {
        if (res[0].html) {
          this.postHTML = res[0].html;
        } else {
          this.postHTML = '<p>' + this.route.snapshot.params['post'] + '</p><p>Not found</p>';
        }
      }, error => {
        console.log('Error loading post ' + error);
      });
  }
}
