import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-raging-bull-casino-review',
  templateUrl: './raging-bull-casino-review.component.html',
  styleUrls: ['./raging-bull-casino-review.component.scss']
})
export class RagingBullCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Raging Bull Review 2024 - Is Raging Bull a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Raging Bull Casino review. Sign up to claim your $2500 welcome bonus from Raging Bull Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Raging Bull Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
