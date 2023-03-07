import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-casino-games',
  templateUrl: './casino-games.component.html',
  styleUrls: ['./casino-games.component.scss']
})
export class CasinoGamesComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Online Casino Games - Play Top Casino Games with $1600');
    this.metaService.addTags([
      {name: 'description', content: 'Top casino games. Play popular types of casino games like slots, blackjack, craps, roulette & more. on the web for real money. Sign up & claim exclusive bonuses!'},
      { name: 'keywords', content: 'casino games' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
