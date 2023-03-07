import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bush-telegraph',
  templateUrl: './bush-telegraph.component.html',
  styleUrls: ['./bush-telegraph.component.scss']
})
export class BushTelegraphComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Bush Telegraph Slot Review - Jackpot, RTP & Game Info [Microgaming]');
    this.metaService.addTags([
      {name: 'description', content: 'Bust Telegraph is a 5-reel slot machine with African wildlife. There are 3 rows with 15 paylines and an abundance of winning opportunities.'},
      { name: 'keywords', content: 'Bush Telegraph Slot Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
