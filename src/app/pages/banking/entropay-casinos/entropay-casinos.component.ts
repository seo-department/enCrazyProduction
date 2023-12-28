import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-entropay-casinos',
  templateUrl: './entropay-casinos.component.html',
  styleUrls: ['./entropay-casinos.component.scss']
})
export class EntropayCasinosComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best EntroPay Casinos 2024 - Casinos Accepting EntroPay Payments');
    this.metaService.addTags([
      {name: 'description', content: 'EntroPay casinos. List of casinos that accept EntroPay deposit method. EntroPay is a debit card allowing players to make safe real money casino deposits.'},
      { name: 'keywords', content: 'EntroPay casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
