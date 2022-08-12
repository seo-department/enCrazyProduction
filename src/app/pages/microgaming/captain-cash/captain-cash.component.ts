import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-captain-cash',
  templateUrl: './captain-cash.component.html',
  styleUrls: ['./captain-cash.component.scss']
})
export class CaptainCashComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Captain Cash Slot Review - Jackpot, RTP & Game Info [Microgaming]');
    this.metaService.addTags([
      {name: 'description', content: 'All aboard a luxury yacht where your captain is Captain Cash. The slot offers 3 reels, 5 paylines and a wild.  Win 2500-coins when you play real money online!'},
      { name: 'keywords', content: 'Captain Cash Slot Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
