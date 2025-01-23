import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-online-lotteries',
  templateUrl: './online-lotteries.component.html',
  styleUrls: ['./online-lotteries.component.scss']
})
export class OnlineLotteriesComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Online Lotteries – Where to Play the Lottery for Real Money');
    this.metaService.addTags([
      {name: 'description', content: 'Play the best online lotteries and stand to win big cash prizes. Buy lottery tickets online to win the biggest progressive pots of cash in 2025.'},
      { name: 'keywords', content: 'Online Lotteries' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
