import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-grand-rush-casino-review',
  templateUrl: './grand-rush-casino-review.component.html',
  styleUrls: ['./grand-rush-casino-review.component.scss']
})
export class GrandRushCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Grand Rush Casino Review 2025 - Is Grand Rush a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Grand Rush Casino review. Sign up to claim your $1,000 welcome bonus from Grand Rush Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Grand Rush Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
