import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-joka-casino-review',
  templateUrl: './joka-casino-review.component.html',
  styleUrls: ['./joka-casino-review.component.scss']
})
export class WildCardCityCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Joka Casino Review 2025 - Is Joka a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Joka Casino review. Sign up to claim your $5000 welcome bonus from Joka Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Joka Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
