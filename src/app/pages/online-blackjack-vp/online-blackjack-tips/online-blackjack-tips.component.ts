import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-online-blackjack-tips',
  templateUrl: './online-blackjack-tips.component.html',
  styleUrls: ['./online-blackjack-tips.component.scss']
})
export class OnlineBlackjackTipsComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Blackjack Tips - 10 Tips to Incerase Your Blackjack Odds');
    this.metaService.addTags([
      {name: 'description', content: 'Beginner Blackjack Tips. Our tips guide offers the best secrets to blackjack & how to increase your odds of winning. Other blackjack tips include when to hit.'},
      { name: 'keywords', content: 'Blackjack Tips' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
