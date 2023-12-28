import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-irish-luck-casino-review',
  templateUrl: './irish-luck-casino-review.component.html',
  styleUrls: ['./irish-luck-casino-review.component.scss']
})
export class IrishLuckCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Irish Luck Casino Review 2024 - Is Irish Luck a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Irish Luck Casino review. Sign up to claim your 300% welcome bonus from Irish Luck casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Irish Luck Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
