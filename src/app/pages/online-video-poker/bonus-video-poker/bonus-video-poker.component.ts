import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bonus-video-poker',
  templateUrl: './bonus-video-poker.component.html',
  styleUrls: ['./bonus-video-poker.component.scss']
})
export class BonusVideoPokerComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Bonus Video Poker Strategy - Play Bonus Poker Online for FREE');
    this.metaService.addTags([
      {name: 'description', content: 'Bonus Video Poker is a variant based on on the classic Jacks or Better. Get real money bonus payouts. Play Bonus video poker at the best-rated casinos.'},
      { name: 'keywords', content: 'Bonus Video Poker' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
