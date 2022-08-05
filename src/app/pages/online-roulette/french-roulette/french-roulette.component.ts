import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-french-roulette',
  templateUrl: './french-roulette.component.html',
  styleUrls: ['./french-roulette.component.scss']
})
export class FrenchRouletteComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('French Roulette - Find French Roulette Table, Tips & Rules');
    this.metaService.addTags([
      {name: 'description', content: 'French roulette wheel layout contains a 0. This roulette variant has a house edge of 1.35% & a higher RTP. See what French roulette bets you can place here.'},
      { name: 'keywords', content: 'French Roulette' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
