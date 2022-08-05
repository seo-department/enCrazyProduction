import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rainbrew',
  templateUrl: './rainbrew.component.html',
  styleUrls: ['./rainbrew.component.scss']
})
export class RainbrewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Rainbrew Slot Review - Jackpot, RTP & Game Info [Microgaming]');
    this.metaService.addTags([
      {name: 'description', content: 'Rainbrew is an Irish-themed high variance slot game with great payouts. The slot also features wilds, scatters, and a sidewinder bonus feature.'},
      { name: 'keywords', content: 'Rainbrew Slot Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
