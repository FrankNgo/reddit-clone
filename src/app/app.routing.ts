import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { AskredditComponent } from './askreddit/askreddit.component';
import { WorldnewsComponent } from './worldnews/worldnews.component';


const appRoutes: Routes = [
  {
    path: '',
    component: FrontPageComponent
  },
  {
    path: 'askreddit',
    component: AskredditComponent
  },
  {
    path: 'worldnews',
    component: WorldnewsComponent
  }

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
