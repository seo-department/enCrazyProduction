import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-fortunium',
  templateUrl: './fortunium.component.html',
  styleUrls: ['./fortunium.component.scss']
})
export class FortuniumComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Fortunium Slot Review - Jackpot, RTP & Game Info [Microgaming]');
    this.metaService.addTags([
      {name: 'description', content: 'Fortunium detailed slot review. The game has 5 reels, 40 paylines, and a variety of symbols that trigger bonus rounds. Find out how to play and win here!'},
      { name: 'keywords', content: 'Fortunium Slot Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
