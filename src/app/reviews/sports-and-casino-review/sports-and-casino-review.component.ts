import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sports-and-casino-review',
  templateUrl: './sports-and-casino-review.component.html',
  styleUrls: ['./sports-and-casino-review.component.scss']
})
export class SportsAndCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Sports & Casino Review 2022 - Is Sports & Casino Safe?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest SportsandCasino review. Sign up to claim your $1,500 welcome bonus from SportsandCasino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Sports and Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
