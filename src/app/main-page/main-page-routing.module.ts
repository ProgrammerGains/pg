import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: './posts/posts.module#PostsModule'
  },
  {
    path: 'posts',
    loadChildren: './posts/posts.module#PostsModule'
  },
  {
    path: 'reviews',
    loadChildren: './reviews/reviews.module#ReviewsModule',
  },
  {
    path: 'videos',
    loadChildren: './videos/videos.module#VideosModule'
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
