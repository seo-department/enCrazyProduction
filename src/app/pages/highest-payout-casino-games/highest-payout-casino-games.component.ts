import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-highest-payout-casino-games',
  templateUrl: './highest-payout-casino-games.component.html',
  styleUrls: ['./highest-payout-casino-games.component.scss']
})
export class HighestPayoutCasinoGamesComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Highest Payout Casino Games – Best Casino Game to Win Real Money');
    this.metaService.addTags([
      {name: 'description', content: 'Looking for the highest payout casino games? Use out guide to find a list of casino games with the best odds and casinos with the highest payout slots.'},
      { name: 'keywords', content: 'Highest Payout Casino' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
