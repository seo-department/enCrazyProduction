import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-roulette-royale',
  templateUrl: './roulette-royale.component.html',
  styleUrls: ['./roulette-royale.component.scss']
})
export class RouletteRoyaleComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Roulette Royale - Play Roulette Royale for Real Money');
    this.metaService.addTags([
      {name: 'description', content: 'Roulette Royale includes progressive jackpots and bonus payment. This roulette variant has only one zero. Play roulette royale at top-rated casino sites.'},
      { name: 'keywords', content: 'Roulette Royale' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
