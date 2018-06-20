import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReviewsComponent} from "./reviews.component";
import {ReviewComponent} from "./review.component";

const routes: Routes = [
  {
    path: '',
    component: ReviewsComponent
  },
  {
    path: ':review',
    component: ReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
