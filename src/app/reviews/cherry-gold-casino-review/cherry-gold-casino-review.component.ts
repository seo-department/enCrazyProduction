import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cherry-gold-casino-review',
  templateUrl: './cherry-gold-casino-review.component.html',
  styleUrls: ['./cherry-gold-casino-review.component.scss']
})
export class CherryGoldCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Cherry Gold Casino Review 2022 – Is Cherry Gold a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Cherry Gold Casino Review. Sign up at Cherry Gold Casino today and claim your welcome bonus worth up to $2700. Read our full casino review here!'},
      { name: 'keywords', content: 'Cherry Jackpot Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
