import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-online-blackjack',
  templateUrl: './online-blackjack.component.html',
  styleUrls: ['./online-blackjack.component.scss']
})
export class OnlineBlackjackComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Online Blackjack - Play Real Money with $3000 Blackjack Bonus');
    this.metaService.addTags([
      {name: 'description', content: 'Looking for the top 10 online blackjack casinos?. We recommend the best real money blackjack games and casinos. Find out more about this popular card game.'},
      { name: 'keywords', content: 'Online Blackjack' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
