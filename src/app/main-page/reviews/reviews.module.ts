import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewsComponent } from './reviews.component';
import {PostsComponent} from "../posts/posts.component";

@NgModule({
  imports: [
    CommonModule,
    ReviewsRoutingModule
  ],
  declarations: [
    ReviewsComponent
  ],
  exports: [
    ReviewsComponent
  ]
})
export class ReviewsModule { }
