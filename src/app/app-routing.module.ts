import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SocialMediaListComponent} from "./components/social-media-list/social-media-list.component";

const routes: Routes = [{path: '', component: SocialMediaListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
