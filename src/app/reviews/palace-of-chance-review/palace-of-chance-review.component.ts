import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-palace-of-chance-review',
  templateUrl: './palace-of-chance-review.component.html',
  styleUrls: ['./palace-of-chance-review.component.scss']
})
export class PalaceOfChanceReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Palace of Chance Review 2024 - Is Palace of Chance a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Palace of Chance Casino review. Sign up to claim your500% welcome bonus from Palace ofr Chance Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Palace of Chance Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
