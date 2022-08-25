import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-adventure-palace',
  templateUrl: './adventure-palace.component.html',
  styleUrls: ['./adventure-palace.component.scss']
})
export class AdventurePalaceComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Adventure Palace Slot Review - Jackpot, RTP & Game Info [Microgaming]');
    this.metaService.addTags([
      {name: 'description', content: 'Adventure Palace slot. Go on a journey through the jungle with this wild 5 reel slot game from Microgaming.  There are several bonus features with multiplied payouts!'},
      { name: 'keywords', content: 'Adventure Palace Slot Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
