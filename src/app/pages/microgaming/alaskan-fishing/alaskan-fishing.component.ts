import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-alaskan-fishing',
  templateUrl: './alaskan-fishing.component.html',
  styleUrls: ['./alaskan-fishing.component.scss']
})
export class AlaskanFishingComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Alaskan Fishing Slot Review - Jackpot, RTP & Game Info [Microgaming]');
    this.metaService.addTags([
      {name: 'description', content: 'Alaskan Fishing Slot Review. A Microgaming slot with 243 ways to win. There are also free spins, bonus games, and up to 121,5000-coins to win!'},
      { name: 'keywords', content: 'Alaskan Fishing Slot Review ' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
