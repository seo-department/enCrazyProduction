import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vegas-casino-online-review',
  templateUrl: './vegas-casino-online-review.component.html',
  styleUrls: ['./vegas-casino-online-review.component.scss']
})
export class VegasCasinoOnlineReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Online United States Casinos - Top USA Online Casinos 2025');
    this.metaService.addTags([
      {name: 'description', content: 'Vegas casino online review finds honest to play online casino games and win real money.'},
      { name: 'keywords', content: 'Vegas casino online review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
