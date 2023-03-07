import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-multi-player-roulette',
  templateUrl: './multi-player-roulette.component.html',
  styleUrls: ['./multi-player-roulette.component.scss']
})
export class MultiPlayerRouletteComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Multi-Player Roulette - Play Multiplayer Roulette Online');
    this.metaService.addTags([
      {name: 'description', content: "Multi-player roulette. Play online roulette with friends in this multiplayer rouletteversion. Use this guide to stand a chance of winning.'"},
      { name: 'keywords', content: 'Online Casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
