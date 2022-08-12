import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-how-to-play-roulette',
  templateUrl: './how-to-play-roulette.component.html',
  styleUrls: ['./how-to-play-roulette.component.scss']
})
export class HowToPlayRouletteComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('How to Play Roulette - Best Guide to Play Roulette for Real Money');
    this.metaService.addTags([
      {name: 'description', content: 'Learn how to play roulette & win real money prizes. Roulette offers players many betting options. Discover how to win different real money roulette games.'},
      { name: 'keywords', content: 'How to Play Roulette' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
