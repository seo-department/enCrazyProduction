import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cafe-casino-review',
  templateUrl: './cafe-casino-review.component.html',
  styleUrls: ['./cafe-casino-review.component.scss']
})
export class CafeCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Café Casino Review 2022 – Is Café Casino a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Café Casino review. Sign up to claim your $2,500 welcome bonus from Café Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Café Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
