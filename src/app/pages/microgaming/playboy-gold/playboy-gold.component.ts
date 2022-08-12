import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-playboy-gold',
  templateUrl: './playboy-gold.component.html',
  styleUrls: ['./playboy-gold.component.scss']
})
export class PlayboyGoldComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Play Boy Gold Slot Review - Jackpot, RTP & Game Info [Microgaming]');
    this.metaService.addTags([
      {name: 'description', content: 'Detailed review of Playboy Gold from Microgaming. Playboy Gold has 6 reels with 100 paylines, betting ranges between 0.01 and 10.00, and the RTP is 96.01%.'},
      { name: 'keywords', content: 'Play Boy Gold Slot Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
