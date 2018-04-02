import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent {

  constructor(private router: Router){}

    posts: Post[] = [
   new Post("1 1/2 years later Our product doesn’t last that long! O_O", "felicianh",
       "r/funny","https://a.thumbs.redditmedia.com/lQdhVLJTO4ehEcHqTDpOJac7tYpuaQ0hlfRLTArmoi0.jpg", 1),
   new Post("Giant Squid makes an appearance in Tokyo Bay", " RyanSmith",
       "r/TheDepthsBelow","https://b.thumbs.redditmedia.com/ydCkUxZoKvEVr1ns600xdd-NOvUWg_Pt8sFJCOg4ehE.jpg", 2),
   new Post("The year I peaked (Circa 1992)", "heChadillac",
       "r/OldSchooCool","https://b.thumbs.redditmedia.com/kg40YhofqEDqO3dRhgyU8Jafkit8AHRUMFl8e4wR41Y.jpg",3),
   new Post("Kremlin Says Donald Trump Has Invited Vladimir Putin to the White House", "HockeyCannon",
       "r//worldnews","https://www.mycanceriq.ca/Content/images/HelpfulLinks_Banner.png", 4),
   new Post("When a building contracts a flesh eating disease ", "Every_form",
       "r/evilbuildings","https://b.thumbs.redditmedia.com/N0-zaT1rAm6jTRDwL52WuwyIXi0afwN_SQt7YPo3CYA.jpg", 5),
   new Post("Programmers Keyboard Heatmap", "papperskassen",
       "r/ProgrammerHumor","https://b.thumbs.redditmedia.com/hwiNu8qP4UMmPN3snDnwWEBX_gzQ1QZCzfThfrp6ijs.jpg", 6)
  ];


  ngOnInit() {
  }

}
