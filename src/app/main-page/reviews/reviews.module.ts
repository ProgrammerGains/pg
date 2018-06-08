import { NgModule } from '@angular/core';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewsComponent } from './reviews.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,

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
