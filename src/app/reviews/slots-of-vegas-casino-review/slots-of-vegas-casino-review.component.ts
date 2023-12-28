import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-slots-of-vegas-casino-review',
  templateUrl: './slots-of-vegas-casino-review.component.html',
  styleUrls: ['./slots-of-vegas-casino-review.component.scss']
})
export class SlotsOfVegasCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Slots of Vegas Casino Review 2024 - Is Slots of Vegas Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Slots of Vegas Casino review. Sign up to claim your 400% welcome bonus from Slots of vegas Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Slots of Vegas Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
