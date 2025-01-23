import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-big-spin-casino-review',
  templateUrl: './big-spin-casino-review.component.html',
  styleUrls: ['./big-spin-casino-review.component.scss']
})
export class BigSpinCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('BigSpinCasino Review 2025 – Is BigSpin a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest BigSpinCasino review. Sign up to claim your $1,000 welcome bonus from BigSpinCasino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Big Spin Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },

    ]);
  }

}
