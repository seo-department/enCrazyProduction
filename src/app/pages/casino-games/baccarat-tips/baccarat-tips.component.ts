import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-baccarat-tips',
  templateUrl: './baccarat-tips.component.html',
  styleUrls: ['./baccarat-tips.component.scss']
})
export class BaccaratTipsComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Baccarat Tips - 10 Tips to Incerase Your Blackjack Odds');
    this.metaService.addTags([
      {name: 'description', content: 'Top 10 Blackjack tips that increase your chances of winning. Our online blackjack hacks give you everything you need to know. Get all of the secrets to blackjack here.'},
      { name: 'keywords', content: 'Baccarat Tips' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
