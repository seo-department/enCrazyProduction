import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-highway-casino-review',
  templateUrl: './highway-casino-review.component.html',
  styleUrls: ['./highway-casino-review.component.scss']
})
export class HighwayCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Honest Highway Casino Review 2025 – Is Highway a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Highway Casino review. Sign up to claim your 225% welcome bonus from Highway casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Highway Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
