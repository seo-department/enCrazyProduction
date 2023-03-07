import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-double-bonus-video-poker',
  templateUrl: './double-bonus-video-poker.component.html',
  styleUrls: ['./double-bonus-video-poker.component.scss']
})
export class DoubleBonusVideoPokerComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Double Bonus Poker – Complete Guide with Pay Tables & Strategies');
    this.metaService.addTags([
      {name: 'description', content: 'Double Bonus Poker. Use this guide for the best double bonus poker rules, strategies, and guide on how to play. Sign up to play online today!'},
      { name: 'keywords', content: 'Double Bonus Poker' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
