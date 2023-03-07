import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-jokers-wild',
  templateUrl: './jokers-wild.component.html',
  styleUrls: ['./jokers-wild.component.scss']
})
export class JokersWildComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Jokers Wild Video Poker - How to Play Jokers Wild & Win');
    this.metaService.addTags([
      {name: 'description', content: "Looking for the best place to play Joker's Wild Video Poker? Play free Joker’s Wild video poker or for real money to stand a chance of winning real cash."},
      { name: 'keywords', content: 'Jokers Wild Video Poker' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
