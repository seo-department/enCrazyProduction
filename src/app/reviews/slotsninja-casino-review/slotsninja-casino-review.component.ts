import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-slotsninja-casino-review',
  templateUrl: './slotsnina-casino-review.component.html',
  styleUrls: ['./slotsninja-casino-review.component.scss']
})
export class SlotyCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Slots Ninja Casino Review 2023 - Is Slots Ninja a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Slots Ninja Casino review. Sign up to claim your up to $14,000 welcome bonus from Slots Ninja Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Slots Ninja Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
