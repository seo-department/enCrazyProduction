import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pai-gow-poker',
  templateUrl: './pai-gow-poker.component.html',
  styleUrls: ['./pai-gow-poker.component.scss']
})
export class PaiGowPokerComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Pai Gow Poker - Rules, Strategy & Payouts for Pai Gow Poker');
    this.metaService.addTags([
      {name: 'description', content: 'Pai Gow Poker review guide in the United States. Find out all there is to know about this exciting poker game online. Sign-up and start playing today!'},
      { name: 'keywords', content: 'Pai Gow Poker review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
