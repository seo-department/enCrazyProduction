import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tens-or-better',
  templateUrl: './tens-or-better.component.html',
  styleUrls: ['./tens-or-better.component.scss']
})
export class TensOrBetterComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Tens of Better Video Poker - How to Play Tens or Better & Win');
    this.metaService.addTags([
      {name: 'description', content: 'Tens or Better video poker. Have a pair of 10s or better to win this video poker variant. Play Tens or Better video poker for real money.'},
      { name: 'keywords', content: 'Tens of Better Video Poker' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
