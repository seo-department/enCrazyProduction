import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-high-noon-casino-review',
  templateUrl: './high-noon-casino-review.component.html',
  styleUrls: ['./high-noon-casino-review.component.scss']
})
export class HighNoonCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Highnoon Casino Review 2024 - Is Highnoon a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Highnoon Casino review. Sign up to claim your $2,500 welcome bonus from Highnoon Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Highnoon Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }
}
