import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { AskredditComponent } from './askreddit/askreddit.component';
import { WorldnewsComponent } from './worldnews/worldnews.component';


@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    AskredditComponent,
    WorldnewsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
