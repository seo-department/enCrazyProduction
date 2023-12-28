import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lucky-red-casino-review',
  templateUrl: './lucky-red-casino-review.component.html',
  styleUrls: ['./lucky-red-casino-review.component.scss']
})
export class LuckyRedCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Lucky Red Casino Review 2024 - Is Lucky Red a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Lucky Red Casino review. Sign up to claim your $4,000 welcome bonus from Lucky Red Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Lucky Red Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
