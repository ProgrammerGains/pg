import { NgModule } from '@angular/core';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,

    VideosRoutingModule
  ],
  declarations: [
    VideosComponent
  ],
  exports: [
    VideosComponent
  ]
})
export class VideosModule { }
