import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-break-da-bank-again',
  templateUrl: './break-da-bank-again.component.html',
  styleUrls: ['./break-da-bank-again.component.scss']
})
export class BreakDaBankAgainComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Break da Bank Slot Review - Jackpot, RTP & Game Info [Microgaming]');
    this.metaService.addTags([
      {name: 'description', content: 'Break da Bank from Microgaming is a 3-reel, 3 row slot with 5 paylines. This slot is ideal for food lovers, and players who enjoy a fun classic slot.'},
      { name: 'keywords', content: 'Break da Bank Slot Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
