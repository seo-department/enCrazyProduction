import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blackjack-rules',
  templateUrl: './blackjack-rules.component.html',
  styleUrls: ['./blackjack-rules.component.scss']
})
export class BlackjackRulesComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Blackjack Rules - Most Common Blackjack Rules to Win');
    this.metaService.addTags([
      {name: 'description', content: 'Blackjack Rules. Learn basic blackjack rules with this blackjack guide. Learn how to deal blackjack or polish your technique & win real money!'},
      { name: 'keywords', content: 'Blackjack Rules' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
