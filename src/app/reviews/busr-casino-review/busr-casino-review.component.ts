import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-busr-casino-review',
  templateUrl: './busr-casino-review.component.html',
  styleUrls: ['./busr-casino-review.component.scss']
})
export class BusrCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Honest BUSR Casino Review 2022 - Is BUSR a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest BUSR Casino review. Sign up to claim your $500 welcome bonus from BUSR Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'BUSR Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
