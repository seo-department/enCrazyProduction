import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-wild-card-city-casino-review',
  templateUrl: './wild-card-city-casino-review.component.html',
  styleUrls: ['./wild-card-city-casino-review.component.scss']
})
export class WildCardCityCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Wild Card CityCasino Review 2022 - Is Wild Card City a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Wild Card City Casino review. Sign up to claim your $5000 welcome bonus from Wild Card City Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Wild Card CityCasino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
