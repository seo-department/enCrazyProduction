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
    this.metaTitle.setTitle('Baccarat Tips - 10 Tips to Incerase Your Baccarat Odds');
    this.metaService.addTags([
      {name: 'description', content: 'Top 10 Baccarat tips that increase your chances of winning. Our online baccarat tips, hacks & secrets give you everything you need to know to win real money.'},
      { name: 'keywords', content: 'Baccarat Tips' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
