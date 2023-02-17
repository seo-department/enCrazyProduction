import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sloty-casino-review',
  templateUrl: './slotastic-casino-review.component.html',
  styleUrls: ['./slotastic-casino-review.component.scss']
})
export class SlotyCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Slotastic Casino Review 2023 - Is Slotastic a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Slotastic Casino review. Sign up to claim your 250% welcome bonus from Slotastic Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Slotastic Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
