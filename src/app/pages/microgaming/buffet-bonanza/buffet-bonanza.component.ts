import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-buffet-bonanza',
  templateUrl: './buffet-bonanza.component.html',
  styleUrls: ['./buffet-bonanza.component.scss']
})
export class BuffetBonanzaComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Buffet Bonanza Slot Review - Jackpot, RTP & Game Info [Microgaming]');
    this.metaService.addTags([
      {name: 'description', content: 'Buffet Bonanza is a posh food-themed slot game. Microgaming have created this slot with 5-reels, 25 paylines and is filled with wilds, free spins and more!'},
      { name: 'keywords', content: 'Buffet Bonanza Slot Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
