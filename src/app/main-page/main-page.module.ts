import {NgModule} from '@angular/core';

import {MainPageRoutingModule} from './main-page-routing.module';
import {MainPageComponent} from './main-page.component';
import {SharedModule} from "../shared/shared.module";
import {PostsModule} from "./posts/posts.module";
import {AboutComponent} from './about/about.component';

@NgModule({
  imports: [
    SharedModule,
    PostsModule,
    MainPageRoutingModule
  ],
  declarations: [
    MainPageComponent,
    AboutComponent
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
