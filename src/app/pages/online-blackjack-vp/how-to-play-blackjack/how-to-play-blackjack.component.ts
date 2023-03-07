import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-how-to-play-blackjack',
  templateUrl: './how-to-play-blackjack.component.html',
  styleUrls: ['./how-to-play-blackjack.component.scss']
})
export class HowToPlayBlackjackComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('How to Play Blackjack Online – Blackjack Guideline for Beginners');
    this.metaService.addTags([
      {name: 'description', content: 'How to play blackjack. Master the basics of blackjack with this simple blackjack guide. Learn the game of blackjack and increase your chances of winning.'},
      { name: 'keywords', content: 'How to Play Blackjack Online' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
