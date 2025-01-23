import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-slot-madness-casino-review',
  templateUrl: './slot-madness-casino-review.component.html',
  styleUrls: ['./slot-madness-casino-review.component.scss']
})
export class SlotMadnessCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Slot Madness Casino Review 2025 - Is Slot Madness a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Slot Madness Casino review. Sign up to claim your 300% welcome bonus from Slot Madness Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Slot Madness Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
