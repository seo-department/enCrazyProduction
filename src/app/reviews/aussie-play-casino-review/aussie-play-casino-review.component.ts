import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-aussie-play-casino-review',
  templateUrl: './aussie-play-casino-review.component.html',
  styleUrls: ['./aussie-play-casino-review.component.scss']
})
export class AussiePlayCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Aussie Play Casino Review 2023 – Is Aussie a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Aussie Play Casino review. Sign up to claim your 250% welcome bonus from Aussie Play Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Aussie Play Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },

    ]);
  }

}
