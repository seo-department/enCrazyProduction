import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tomb-raider-slot-review',
  templateUrl: './tomb-raider-slot-review.component.html',
  styleUrls: ['./tomb-raider-slot-review.component.scss']
})
export class TombRaiderSlotReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Tomb raider Review – Play Tomb raider at American Microgaming casinos');
    this.metaService.addTags([
      {name: 'description', content: 'Tomb raider slot review. Battle it out with the kings of the beasts as these big boys leap from the reels. Another epic US slot game from Microgaming.'},
      { name: 'keywords', content: 'Tomb raider slot review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
