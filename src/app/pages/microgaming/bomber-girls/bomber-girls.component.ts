import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bomber-girls',
  templateUrl: './bomber-girls.component.html',
  styleUrls: ['./bomber-girls.component.scss']
})
export class BomberGirlsComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Bomber Girls Slot Review - Jackpot, RTP & Game Info [Microgaming]');
    this.metaService.addTags([
      {name: 'description', content: 'Bomber Girls is an exciting war theme slot from Microgaming. There are 5 reels & 20 paylines. Read our review to find out more about the bonuses and payouts!'},
      { name: 'keywords', content: 'Bomber Girls Slot Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
