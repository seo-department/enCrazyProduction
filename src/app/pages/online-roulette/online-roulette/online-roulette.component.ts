import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-online-roulette',
  templateUrl: './online-roulette.component.html',
  styleUrls: ['./online-roulette.component.scss']
})
export class OnlineRouletteComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Online Roulette Sites 2022 - Compare USA Roulette Casinos');
    this.metaService.addTags([
      {name: 'description', content: 'Looking for top online roulette casinos? Use our guide to play real money roulette games from high-recommended casinos & increase your chances.'},
      { name: 'keywords', content: 'Online Roulette' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
