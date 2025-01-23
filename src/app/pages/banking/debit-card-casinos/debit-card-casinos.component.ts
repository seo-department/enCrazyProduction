import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-debit-card-casinos',
  templateUrl: './debit-card-casinos.component.html',
  styleUrls: ['./debit-card-casinos.component.scss']
})
export class DebitCardCasinosComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Debit Card Casinos 2025 - Casinos Accepting Debit Cards');
    this.metaService.addTags([
      {name: 'description', content: 'Debit Card casinos transaction method. Find the top online casinos accepting debit cards such as VISA to make quick and easy deposits & withdrawals.'},
      { name: 'keywords', content: 'Best Debit Card Casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
