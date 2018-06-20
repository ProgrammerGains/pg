import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: '<app-review></app-review>',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  postHTML: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.loadHTML();
  }

  loadHTML() {
    this.http.post<string>('/php_api/review_get.php', {review: this.route.snapshot.params['review']})
      .subscribe((res: any) => {
        console.log(res);
        if (res !== null && res[0].html) {
          this.postHTML = res[0].html;
        } else {
          this.postHTML = '<p>' + this.route.snapshot.params['review'] + '</p><p>Not found</p>';
        }
      }, error => {
        console.log('Error loading post ' + error);
      });
  }
}
