import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-card-counting',
  templateUrl: './card-counting.component.html',
  styleUrls: ['./card-counting.component.scss']
})
export class CardCountingComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Blackjack card counting - Online Blackjack Strategies');
    this.metaService.addTags([
      {name: 'description', content: 'Blackjack card counting. A guide to card counting in online blackjack. Learn blackjack card counting techniques & expand your chances of winning real money.'},
      { name: 'keywords', content: 'Blackjack card counting' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
