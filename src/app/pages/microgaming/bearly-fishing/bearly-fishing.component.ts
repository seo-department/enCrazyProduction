import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bearly-fishing',
  templateUrl: './bearly-fishing.component.html',
  styleUrls: ['./bearly-fishing.component.scss']
})
export class BearlyFishingComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Bearly Fishing Slot Review - Jackpot, RTP & Game Info [Microgaming]');
    this.metaService.addTags([
      {name: 'description', content: 'Bearly Fishing slot from Micrpogaming, released in March 2009. Fun slot featuring 5 reels, 25 paylines & max payout of 6,000-credits. Read the full review here.'},
      { name: 'keywords', content: 'Bearly Fishing Slot Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
