import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lucky-tiger-casino-review',
  templateUrl: './lucky-tiger-casino-review.component.html',
  styleUrls: ['./lucky-tiger-casino-review.component.scss']
})
export class LuckyTigerCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Lucky Tiger Casino Review 2025 - Is Lucky Tiger a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Lucky Tiger Casino review. Sign up to claim your $1,000 welcome bonus from Lucky Tiger Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Lucky Tiger Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
