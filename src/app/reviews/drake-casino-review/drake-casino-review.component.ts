import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-drake-casino-review',
  templateUrl: './drake-casino-review.component.html',
  styleUrls: ['./drake-casino-review.component.scss']
})
export class DrakeCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Drake Casino Review 2022 - Is Drake Jackpot a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Drake Casino review. Sign up to claim your $2,000 welcome bonus from Drake Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Drake Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
