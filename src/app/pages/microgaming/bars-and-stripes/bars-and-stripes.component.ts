import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bars-and-stripes',
  templateUrl: './bars-and-stripes.component.html',
  styleUrls: ['./bars-and-stripes.component.scss']
})
export class BarsAndStripesComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Bars & Strips Slot Review - Jackpot, RTP & Game Info [Microgaming]');
    this.metaService.addTags([
      {name: 'description', content: 'Bars & Stripes Microgaming Slot. The American Dream packed across 5 reels with 25 paylines. Find the bonus, payout and game features information in this review.'},
      { name: 'keywords', content: 'Bars & Stripes Microgaming Slot' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
