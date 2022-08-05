import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-progressive-jackpots',
  templateUrl: './progressive-jackpots.component.html',
  styleUrls: ['./progressive-jackpots.component.scss']
})
export class ProgressiveJackpotsComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Progressive Jackpot Slot Machine Strategy - Progressive Jackpots');
    this.metaService.addTags([
      {name: 'description', content: 'Top Progressive jackpot slot machines. Progressive jackpots increase with every cash bet. Find the most-rewarding progressive jackpot slot machines.'},
      { name: 'keywords', content: 'Progressive Jackpot' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
