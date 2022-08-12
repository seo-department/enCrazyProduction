import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-agent-jane-blonde',
  templateUrl: './agent-jane-blonde.component.html',
  styleUrls: ['./agent-jane-blonde.component.scss']
})
export class AgentJaneBlondeComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Agent Jane Blonde Slot Review - Jackpot, RTP & Game Info [Microgaming]');
    this.metaService.addTags([
      {name: 'description', content: 'Agent Jane Blonde. A Microgaming slot where agent Jane Blonde is the game’s wild symbol. She can substitute for all symbols on the reels, but not the scatter.'},
      { name: 'keywords', content: 'Agent Jane Blonde Slot Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
