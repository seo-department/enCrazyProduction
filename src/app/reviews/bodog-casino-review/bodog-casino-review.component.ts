import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bodog-casino-review',
  templateUrl: './bodog-casino-review.component.html',
  styleUrls: ['./bodog-casino-review.component.scss']
})
export class BodogCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Trusted Bodog Casino Review 2023 - Is Bodog Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Bodog Casino review. Sign up to claim your $600 welcome bonus from Bodog Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Bodog Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
