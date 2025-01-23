import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bovegas-casino-review',
  templateUrl: './bovegas-casino-review.component.html',
  styleUrls: ['./bovegas-casino-review.component.scss']
})
export class BovegasCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Bovegas Casino Review 2025 – Is Bovegas a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Bovegas Casino Review. Sign up today and claim your $5500 Welcome Bonus from Bovegas Casino. Read our honest review here.'},
      { name: 'keywords', content: 'Bovegas Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
