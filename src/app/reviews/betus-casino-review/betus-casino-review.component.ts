import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-betus-casino-review',
  templateUrl: './betus-casino-review.component.html',
  styleUrls: ['./betus-casino-review.component.scss']
})
export class BetusCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('BetUs Casino Review 2023 - Is BetUs a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest BetUs Casino review. Sign up to claim your $5,375 welcome bonus from BetUs Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'BetUS Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },

    ]);
  }
}
