import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-high-country-casino-review',
  templateUrl: './high-country-casino-review.component.html',
  styleUrls: ['./high-country-casino-review.component.scss']
})
export class HighCountryCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('High Country Casino Review - High Country Casino Bonus Offers');
    this.metaService.addTags([
      {name: 'description', content: 'Honest High Country Casino review. Sign up to claim your $500 welcome bonus from High Country Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'High Country Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
