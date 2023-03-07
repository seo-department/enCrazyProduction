import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-premier-roulette',
  templateUrl: './premier-roulette.component.html',
  styleUrls: ['./premier-roulette.component.scss']
})
export class PremierRouletteComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Premier Roulette – Game Tips, Rules, Bets & Features');
    this.metaService.addTags([
      {name: 'description', content: 'Premier roulette. Use our Premier roulette guide to find out where to play online. Find all the tips & tricks to win real money with premier roulette here!'},
      { name: 'keywords', content: 'Premier Roulette' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
