import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-brango-casino-review',
  templateUrl: './brango-casino-review.component.html',
  styleUrls: ['./brango-casino-review.component.scss']
})
export class BrangoCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Brango Casino Review 2023 - Is Brango a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Brango Casino review. Sign up to claim your $2,000 welcome bonus from Brango Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Brango Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
