import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-jacks-or-better-video-poker',
  templateUrl: './jacks-or-better-video-poker.component.html',
  styleUrls: ['./jacks-or-better-video-poker.component.scss']
})
export class JacksOrBetterVideoPokerComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Jacks or Better Video Poker - How to Play Jacks or Better & Win');
    this.metaService.addTags([
      {name: 'description', content: 'Find easy-no download Jacks or Better casinos here. Use this Jacks or Better trainer and test your skills on this simple and easy to learn video poker variation.'},
      { name: 'keywords', content: 'Jacks or Better Video Poker' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
