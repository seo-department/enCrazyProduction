import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mega-money-rush-slot-review',
  templateUrl: './mega-money-rush-slot-review.component.html',
  styleUrls: ['./mega-money-rush-slot-review.component.scss']
})
export class MegaMoneyRushSlotReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Mega Money Rush Slot Online – Play Mega Money at American Microgaming casinos');
    this.metaService.addTags([
      {name: 'description', content: 'Mega Money Rush Slot Onlin slot review. Battle it out with the kings of the beasts as these big boys leap from the reels. Another epic US slot game from Microgaming.'},
      { name: 'keywords', content: 'Mega Money Rush Slot Online review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
