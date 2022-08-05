import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-boogie-monsters',
  templateUrl: './boogie-monsters.component.html',
  styleUrls: ['./boogie-monsters.component.scss']
})
export class BoogieMonstersComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Boogie Monsters Slot Review - Jackpot, RTP & Game Info [Microgaming]');
    this.metaService.addTags([
      {name: 'description', content: 'Boogie Monsters is a monster-theme slot from Microgaming. This slot has 5 reels with 40 paylines and an explosion of bonus fun features!'},
      { name: 'keywords', content: 'Boogie Monsters Slot Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
