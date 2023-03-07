import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-planet-seven-casino-review',
  templateUrl: './planet-seven-casino-review.component.html',
  styleUrls: ['./planet-seven-casino-review.component.scss']
})
export class PlanetSevenCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Planet 7 Review 2023 - Is Planet 7 a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Planet 7 Casino review. Sign up to claim your 400% welcome bonus from Planet 7 Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Planet 7 Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
