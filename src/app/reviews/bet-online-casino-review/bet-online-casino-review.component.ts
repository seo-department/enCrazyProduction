import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bet-online-casino-review',
  templateUrl: './bet-online-casino-review.component.html',
  styleUrls: ['./bet-online-casino-review.component.scss']
})
export class BetOnlineCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('BetOnline Casino Review 2024 - Is BetOnline Casino Safe?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest BetOnline Casino review. Sign up to claim your $3,000 welcome bonus from BetOnline Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'BetOnline Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }
}
