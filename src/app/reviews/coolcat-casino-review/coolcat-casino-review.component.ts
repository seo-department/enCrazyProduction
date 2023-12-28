import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-coolcat-casino-review',
  templateUrl: './coolcat-casino-review.component.html',
  styleUrls: ['./coolcat-casino-review.component.scss']
})
export class CoolcatCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('CoolCat Review 2024 - Is CoolCat a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted CoolCat casino review. Sign up to claim your 330% welcome bonus from CoolCat casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'CoolCat casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
