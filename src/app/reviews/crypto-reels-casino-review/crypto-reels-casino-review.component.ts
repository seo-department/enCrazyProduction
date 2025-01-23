import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-crypto-reels-casino-review',
  templateUrl: './crypto-reels-casino-review.component.html',
  styleUrls: ['./crypto-reels-casino-review.component.scss']
})
export class CryptoReelsCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Crypto Reels Casino Review 2025 - Is Crypto Reels a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Crypto Reels Casino review. Sign up to claim your $4,500 welcome bonus from Crypto Reels Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Crypto reels review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
