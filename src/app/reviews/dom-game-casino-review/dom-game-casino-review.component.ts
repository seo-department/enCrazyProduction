import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dom-game-casino-review',
  templateUrl: './dom-game-casino-review.component.html',
  styleUrls: ['./dom-game-casino-review.component.scss']
})
export class DomGameCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('DomGame Casino Review 2024 - Is DomGame a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest DomGame Casino review. Sign up to claim your 200% welcome bonus from DomGame Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'DomGame Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
