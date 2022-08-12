import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-win-at-blackjack',
  templateUrl: './win-at-blackjack.component.html',
  styleUrls: ['./win-at-blackjack.component.scss']
})
export class WinAtBlackjackComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Win at Blackjack - Strategies to Win at Real Money Blackajck');
    this.metaService.addTags([
      {name: 'description', content: "Want to win at blackjack?. Our comprehensive guide includes blackjack hands, & do's and don’t's, Increase your chances of winning at blackjack."},
      { name: 'keywords', content: 'Win at Blackjack' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
