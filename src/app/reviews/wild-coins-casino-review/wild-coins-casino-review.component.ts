import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-wild-coins-casino-review',
  templateUrl: './wild-coins-casino-review.component.html',
  styleUrls: ['./wild-coins-casino-review.component.scss']
})
export class WildCoinsCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Wild Coins Casino Review 2023 - Is Wild Coins a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest WIldCoins Casino review. Sign up to claim up to 3.5BTC welcome bonus from Wild Coins Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Wild Coins Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
