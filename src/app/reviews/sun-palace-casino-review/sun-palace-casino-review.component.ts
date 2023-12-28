import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sun-palace-casino-review',
  templateUrl: './sun-palace-casino-review.component.html',
  styleUrls: ['./sun-palace-casino-review.component.scss']
})
export class SunPalaceCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Sun Palace Review 2024 - Is Sun Palace a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Sun Palace Casino review. Sign up to claim your 150% welcome bonus from Sun Palace Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Sun Palace Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
