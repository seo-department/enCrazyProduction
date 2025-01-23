import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mastercard-casinos',
  templateUrl: './mastercard-casinos.component.html',
  styleUrls: ['./mastercard-casinos.component.scss']
})
export class MastercardCasinosComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best MasterCard Casinos 2025 - Casinos Accepting MasterCards');
    this.metaService.addTags([
      {name: 'description', content: 'Looking for casinos accepting MasterCard payments? We have a list of casinos where you can make deposits and withdrawals using MasterCard.'},
      { name: 'keywords', content: 'MasterCard Casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
