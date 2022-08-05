import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-age-of-discovery',
  templateUrl: './age-of-discovery.component.html',
  styleUrls: ['./age-of-discovery.component.scss']
})
export class AgeOfDiscoveryComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Age of Discovery Slot Review - Jackpot, RTP & Game Info [Microgaming]');
    this.metaService.addTags([
      {name: 'description', content: 'Age of Discovery slot. Set sail to riches with this 5-reel, 25 payline slot game from Microgaming. There are wilds, scatters, and a 60,000-coin jackpot waiting to be found.'},
      { name: 'keywords', content: 'Age of Discovery Slot Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
