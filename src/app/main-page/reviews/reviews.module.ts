import { NgModule } from '@angular/core';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewsComponent } from './reviews.component';
import {SharedModule} from "../../shared/shared.module";
import {ReviewComponent} from "./review.component";

@NgModule({
  imports: [
    SharedModule,

    ReviewsRoutingModule
  ],
  declarations: [
    ReviewsComponent,
    ReviewComponent
  ],
  exports: [
    ReviewsComponent
  ]
})
export class ReviewsModule { }
