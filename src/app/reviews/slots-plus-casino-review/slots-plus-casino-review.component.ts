import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-slots-plus-casino-review',
  templateUrl: './slots-plus-casino-review.component.html',
  styleUrls: ['./slots-plus-casino-review.component.scss']
})
export class SlotsPlusCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Slots Plus Casino Review - Is Slots Plus Casino A Trustworthy Site?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Slots Plus casino review. Sign up to claim your 400% welcome bonus from Slots Plus casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Slots Plus Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
