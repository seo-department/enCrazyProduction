import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-no-deposit-bonus',
  templateUrl: './no-deposit-bonus.component.html',
  styleUrls: ['./no-deposit-bonus.component.scss']
})
export class NoDepositBonusComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best No Deposit Bonus Codes  2024 - Latest Casino NDB Codes');
    this.metaService.addTags([
      {name: 'description', content: 'Looking for the best no deposit bonus codes? No deposit bonuses are usually free credits or free spins awarded to you without the need of making a deposit.'},
      { name: 'keywords', content: 'No Deposit Bonus' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
