import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-red-dog-casino-review',
  templateUrl: './red-dog-casino-review.component.html',
  styleUrls: ['./red-dog-casino-review.component.scss']
})
export class RedDogCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Red Dog Casino Review 2022 - Is Red Dog a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Red Dog Casino review. Sign up to claim your 225% welcome bonus from Red Dog Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Red Dog Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
