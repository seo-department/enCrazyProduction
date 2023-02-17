import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-slots-room-casino-review',
  templateUrl: './slots-room-casino-review.component.html',
  styleUrls: ['./slots-room-casino-review.component.scss']
})
export class SlotyCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('SlotsRoom Casino Review 2023 - Is SlotsRoom a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest SlotsRoom Casino review. Sign up to claim up to a US$2,000 welcome bonus from SlotsRoom Casino. Read our trusted casino review here. '},
      { name: 'keywords', content: 'Slots Room Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
