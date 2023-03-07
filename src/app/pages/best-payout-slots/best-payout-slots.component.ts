import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-best-payout-slots',
  templateUrl: './best-payout-slots.component.html',
  styleUrls: ['./best-payout-slots.component.scss']
})
export class BestPayoutSlotsComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Payout Slots – Highest Paying Slots Ranked by RTP');
    this.metaService.addTags([
      {name: 'description', content: 'Looking for the best payout slots? Crazy Vegas Casino finds slot games with top payouts for players to play online. Play slots with the highest RTP & win!'},
      { name: 'keywords', content: 'Best Payout Slots' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
