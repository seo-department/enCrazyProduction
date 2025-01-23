import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cherry-jackpot-casino-review',
  templateUrl: './cherry-jackpot-casino-review.component.html',
  styleUrls: ['./cherry-jackpot-casino-review.component.scss']
})
export class CherryJackpotCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Cherry Jackpot Casino Review 2025 - Is Cherry Jackpot a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Cherry Jackpot Casino review. Sign up to claim your $12,500 welcome bonus from Chery Jackpot casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Cherry Jackpot Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
