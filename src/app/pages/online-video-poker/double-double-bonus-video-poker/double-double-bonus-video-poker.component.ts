import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-double-double-bonus-video-poker',
  templateUrl: './double-double-bonus-video-poker.component.html',
  styleUrls: ['./double-double-bonus-video-poker.component.scss']
})
export class DoubleDoubleBonusVideoPokerComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Double Double Bonus Video Poker - How to Play Double Double Bonus Poker');
    this.metaService.addTags([
      {name: 'description', content: 'Looking for expert guides to USA online casinos? Double Double Bonus Video Poker finds honest to play online casino games and win real money.'},
      { name: 'keywords', content: 'Double Double Bonus Video Poker' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
