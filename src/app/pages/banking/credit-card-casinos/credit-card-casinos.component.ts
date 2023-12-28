import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-credit-card-casinos',
  templateUrl: './credit-card-casinos.component.html',
  styleUrls: ['./credit-card-casinos.component.scss']
})
export class CreditCardCasinosComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Credit Card Casinos 2024 - Casinos Accepting Credit Cards');
    this.metaService.addTags([
      {name: 'description', content: 'Top USA online casinos that accept credit cards. Understand how it works to use your credit cards at casino sites in 2024. We look at the benefits, fees and more.'},
      { name: 'keywords', content: 'Credit Card Casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
