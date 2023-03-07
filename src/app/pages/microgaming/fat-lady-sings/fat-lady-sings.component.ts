import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-fat-lady-sings',
  templateUrl: './fat-lady-sings.component.html',
  styleUrls: ['./fat-lady-sings.component.scss']
})
export class FatLadySingsComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Fat Lady Sings Slot Review - Jackpot, RTP & Game Info [Microgaming]');
    this.metaService.addTags([
      {name: 'description', content: 'Detailed review of Microgaming’s Fat Lady Sings. The slot has 5 reels, with 25 paylines and an interactive free spins bonus! Find out where to play and win!'},
      { name: 'keywords', content: 'Fat Lady Sings Slot Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
