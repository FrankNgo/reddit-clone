import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-askreddit',
  templateUrl: './askreddit.component.html',
  styleUrls: ['./askreddit.component.css']
})
export class AskredditComponent implements OnInit {

  constructor(private router: Router){}

    posts: Post[] = [
   new Post("You are given 1 hour to communicate with your pets so that they understand you perfectly and you understand them perfectly. What do you guys talk about?", "YellowUmbrellaGuy",
       "r/askreddit","https://a.thumbs.redditmedia.com/lQdhVLJTO4ehEcHqTDpOJac7tYpuaQ0hlfRLTArmoi0.jpg", 76.3,1),
   new Post("What is your most terrifying animal encounter?", "  nightmaregirl18",
       "r/TheDepthsBelow","https://b.thumbs.redditmedia.com/ydCkUxZoKvEVr1ns600xdd-NOvUWg_Pt8sFJCOg4ehE.jpg",32.5,2),
   new Post("The year I peaked (Circa 1992)", "heChadillac",
       "r/OldSchooCool","https://b.thumbs.redditmedia.com/kg40YhofqEDqO3dRhgyU8Jafkit8AHRUMFl8e4wR41Y.jpg",20.5,3),
   new Post("Kremlin Says Donald Trump Has Invited Vladimir Putin to the White House", "HockeyCannon",
       "r//worldnews","https://www.mycanceriq.ca/Content/images/HelpfulLinks_Banner.png", 9.1,4),
   new Post("When a building contracts a flesh eating disease ", "Every_form",
       "r/evilbuildings","https://b.thumbs.redditmedia.com/N0-zaT1rAm6jTRDwL52WuwyIXi0afwN_SQt7YPo3CYA.jpg",1.3,5),
   new Post("Programmers Keyboard Heatmap", "papperskassen",
       "r/ProgrammerHumor","https://b.thumbs.redditmedia.com/hwiNu8qP4UMmPN3snDnwWEBX_gzQ1QZCzfThfrp6ijs.jpg",.2,6)
  ];
  ngOnInit() {
  }

}
