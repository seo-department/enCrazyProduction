import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-royal-ace-casino-review',
  templateUrl: './royal-ace-casino-review.component.html',
  styleUrls: ['./royal-ace-casino-review.component.scss']
})
export class RoyalAceCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Royal Ace Casino Review 2023 - Is Royal Ace a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Royal Ace Casino review. Sign up to claim your 385% welcome bonus from Royal Ace Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Royal Ace Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
