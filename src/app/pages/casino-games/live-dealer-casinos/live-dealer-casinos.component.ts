import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-live-dealer-casinos',
  templateUrl: './live-dealer-casinos.component.html',
  styleUrls: ['./live-dealer-casinos.component.scss']
})
export class LiveDealerCasinosComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Live Casinos Online 2024 - USA Live Dealer Sites');
    this.metaService.addTags([
      {name: 'description', content: 'Best live casinos of 2024 offering live dealer games online. Find informationon popular live casino sites & games such roulette,baccarat, poker & more!'},
      { name: 'keywords', content: 'live casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
