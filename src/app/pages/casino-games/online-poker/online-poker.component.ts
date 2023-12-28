import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-online-poker',
  templateUrl: './online-poker.component.html',
  styleUrls: ['./online-poker.component.scss']
})
export class OnlinePokerComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Online Poker 2024 – Play Real Money with $3000 Poker Bonus');
    this.metaService.addTags([
      {name: 'description', content: 'Looking for the best online poker sites? Find top real money online poker sites with Crazy Vegas Casino. Sign up & get up to $3000 in poker bonus codes.'},
      { name: 'keywords', content: 'Online Poker' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
