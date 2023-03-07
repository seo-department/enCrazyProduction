import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Casino Banking - Safe Deposit & Withdrawal Methods');
    this.metaService.addTags([
      {name: 'description', content: 'Casino banking. Top casinos offer a variety of deposit and withdrawal methods. Click to find a list of the best casino banking methods available on the web.'},
      { name: 'keywords', content: 'Casino banking' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
