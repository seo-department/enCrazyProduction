import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blackjack-strategy',
  templateUrl: './blackjack-strategy.component.html',
  styleUrls: ['./blackjack-strategy.component.scss']
})
export class BlackjackStrategyComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Blackjack Strategy - Best Blackjack Strategy to Improve Your Odds');
    this.metaService.addTags([
      {name: 'description', content: 'Blackjack Strategy. Learn basic blackjack strategies & improve your chances of winning real money. Try this blackjack strategy guide & stand a chance of winning!'},
      { name: 'keywords', content: 'Blackjack Strategy' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
